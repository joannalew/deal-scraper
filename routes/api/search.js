const express = require("express");
const request = require('request');
const Promise = require('promise');
const cheerio = require('cheerio');
const router = express.Router();

const ebayKey = require('../../config/keys').ebayAPIKey;
const etsyKey = require('../../config/keys').etsyAPIKey;

const getImageFromEbay = async function(itemObj, res) {
    var promiseArray = [];

    for (let key in itemObj) {
        let url = "http://open.api.ebay.com/shopping";
        url += "?callname=GetSingleItem";
        url += "&responseencoding=JSON";
        url += `&appid=${ebayKey}`;
        url += "&siteid=0";
        url += "&version=967";
        url += `&ItemID=${itemObj[key].storeId}`;

        promiseArray.push(new Promise((resolve, reject) => 
            request(url, function (error, response, html) {
                if (error) { reject(error); }
                let resStr = JSON.stringify(response);
                let resObj = JSON.parse(resStr);
                let resBody = resObj.body;
                let resReal = JSON.parse(resBody);
                let src = resReal.Item.PictureURL[0];
                itemObj[key].storeImg = src;
                resolve(itemObj[key]);
            })
        ))
    }

    res.send({ items: await Promise.all(promiseArray) });
};

const getImageFromEtsy = async function(itemObj, res) {
    var promiseArr = [];

    for (let key in itemObj) {
        let url = 'https://openapi.etsy.com/v2/listings/';
        url += `${itemObj[key].storeId}/images`;
        url += `?api_key=${etsyKey}`;

        await new Promise((res) => setTimeout(res, 100));

        promiseArr.push(new Promise((resolve, reject) => 
            request(url, function (error, response, html) {
                if (error) { reject(error); }
                let resStr = JSON.stringify(response);
                let resObj = JSON.parse(resStr);
                let resBody = resObj.body;
                let resReal = JSON.parse(resBody);
                let src = resReal.results[0]['url_570xN'];
                itemObj[key].storeImg = src;
                resolve(itemObj[key]);
            })
        ))
    }

    res.send({ items: await Promise.all(promiseArr) });
}

router.get('/:id', function(req, res) {
    let id = req.params.id;

    let url = "http://open.api.ebay.com/shopping";
    url += "?callname=GetSingleItem";
    url += "&responseencoding=JSON";
    url += `&appid=${ebayKey}`;
    url += "&siteid=0";
    url += "&version=967";
    url += `&ItemID=${id}`;

    request(url, function (error, response, html) {
        if (!error) {
            let resStr = JSON.stringify(response);
            let resObj = JSON.parse(resStr);
            let resBody = resObj.body;
            let resReal = JSON.parse(resBody);
            let src = resReal.Item.PictureURL[0];
            res.send(src);
        }
    })
});

router.get('/etsy/:keywords', function(req, res) {
    var urlEtsy = 'https://openapi.etsy.com/v2/listings/active';
    urlEtsy += `?keywords=${req.params.keywords}`;
    urlEtsy += `&api_key=${etsyKey}`;

    request(urlEtsy, function(error, response) {
        if (!error) {
            let resStr = JSON.stringify(response);
            let resObj = JSON.parse(resStr);
            let resBody = resObj.body;
            let resReal = JSON.parse(resBody)
            
            let items = resReal.results;
            let count = 25;
            let itemInfo = {};

            for (let i = 0; i < count; i++) {
                itemInfo[i] = {
                    store: 'etsy',
                    storeId: items[i].listing_id, 
                    storeUrl: items[i].url.slice(0, -52),
                    title: items[i].title,
                    price: items[i].price
                };
            }

            getImageFromEtsy(itemInfo, res);
        }
    })
});

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

    request(url, function(error, response) {
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