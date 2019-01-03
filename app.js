const express = require("express");
const mongoose = require('mongoose');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const db = require('./config/keys').mongoURI;
const ebayKey = require('./config/keys').ebayAPIKey;
const items = require("./routes/api/items");

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Deal Scraper Flex Project"));

app.use('/api/items', items);

app.get('/ebay', function(req, res) {
    let callback = '_cb_findItemsByKeywords';
    let keywords = 'nike%20air%20jordan';

    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += `&SECURITY-APPNAME=${ ebayKey }`;
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += `&callback=${ callback }`;
    url += "&REST-PAYLOAD";
    url += `&keywords=${ keywords }`;

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
                     storeImg: items[i].galleryURL[0],
                     title: items[i].title[0],
                     price: items[i].sellingStatus[0].convertedCurrentPrice[0].__value__ + ' ' + items[i].sellingStatus[0].currentPrice[0]['@currencyId']
                    };
            }

            res.send(itemInfo); 
        }
    })
});