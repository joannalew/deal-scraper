const express = require("express");
const request = require('request');
const Promise = require('promise');
const rp = require('request-promise');
const cheerio = require('cheerio');
const router = express.Router();

const ebayKey = require('../../config/keys').ebayAPIKey;

router.get('/', (req, res) => res.json({ msg: "This is the search route" }));
router.get("/test", (req, res) => res.json({ msg: "This is the search test route" }));

const getImageFromEbay = async function(itemObj, res) {
    var promiseArray = [];

    for (let key in itemObj) {
        let url = itemObj[key].storeUrl;
        promiseArray.push(new Promise((resolve, reject) => 
            request(url, function (error, response, html) {
                if (error) { reject(error); }
                var $ = cheerio.load(html);
                var src = $('#icImg').attr('src');
                itemObj[key].storeImg = src;
                resolve(itemObj[key]);
            })
        ))
    }

    res.send({ items: await Promise.all(promiseArray) });
};

router.get('/ebay/:keywords', function(req, res) {
    let callback = '_cb_findItemsByKeywords';
    let keywords = req.params.keywords;

    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += `&SECURITY-APPNAME=${ebayKey}`;
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += `&callback=${callback}`;
    url += "&REST-PAYLOAD";
    url += `&keywords=${keywords}`;

    request(url, function (error, response) {
        if (!error) {
            let resStr = JSON.stringify(response);
            let resObj = JSON.parse(resStr);
            let resBody = resObj.body;
            resBody = resBody.substring(5 + callback.length, resBody.length - 1);
            let resReal = JSON.parse(resBody).findItemsByKeywordsResponse[0];

            let count = resReal.searchResult[0]['@count'];
            let items = resReal.searchResult[0].item;
            let itemInfo = {};
            let idArray = [];

            for (let i = 0; i < count; i++) {
                if (idArray.includes(items[i].itemId[0])) { continue; }
                idArray.push(items[i].itemId[0]);

                itemInfo[idArray.length] =
                    {
                      store: 'ebay',
                      storeId: items[i].itemId[0], 
                      storeUrl: items[i].viewItemURL[0],
                      title: items[i].title[0],
                      price: items[i].sellingStatus[0].convertedCurrentPrice[0].__value__ + ' ' + items[i].sellingStatus[0].currentPrice[0]['@currencyId']
                    };
            }

            getImageFromEbay(itemInfo, res);
        }
    })
});

module.exports = router;