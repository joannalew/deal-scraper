# Welcome to DealCliq!

[DealCliq Live](http://deal-cliq.herokuapp.com/#/)

![dealcliq](https://i.imgur.com/F60E5cS.jpg)

DealCliq is a site aggregator that pulls item prices from Etsy, Ebay, and Amazon. Users can follow items all on one site and easily track the item's price with a price graph.

### Background and Overview
Tired of buying something online and seeing the same item on sale the day after? Well, look no further! DealCliq will monitor the price of items for you, and send you an email alert when the item goes on sale. DealCliq will also show you the price history of the item in a nice, neat graphs, so you can watch the price for yourself. It's that easy!

### Technologies
* MongoDB, mLab
* Node.js, Express.js
* React, Redux
* HTML, CSS, and Javascript

### Features
* Maintain user authentication security from frontend to backend using BCrypt.
* Allows users to search for items on Ebay, Etsy, or Amazon.
* Allows users to follow items from all sites, displayed as list on profile page.
* Shows item name, prices, and other information.
* Has link to original site if user decides to purchase item.

#### Search
Users can search for items by typing the item name in the search bar. If a user doesn't specify a site to search, DealCliq queries Ebay by default. Users can then scroll through the search result and follow items they wish to track.

![dealcliq-search](https://i.imgur.com/7EeaAXl.jpg)

#### Follow
Users can follow items they want to track by clicking the "Save Item" or "Follow" buttons. The items are grouped together and listed on the user's profile page, so they can see all the items they're tracking in one easy place.

![dealcliq-follow](https://i.imgur.com/Q1G6UNE.jpg)

#### Cool Code
To pull the items from Etsy, we first make a single API call to Etsy to see what items are available for purchase on Etsy's site.
```javascript
router.get('/etsy/:keywords', function (req, res) {
    var urlEtsy = 'https://openapi.etsy.com/v2/listings/active';
    urlEtsy += `?keywords=${req.params.keywords}`;
    urlEtsy += `&api_key=${etsyKey}`;

    request(urlEtsy, function (error, response) {
        if (!error) {
            let resStr = JSON.stringify(response);
            let resObj = JSON.parse(resStr);
            let resBody = resObj.body;
            let resReal = JSON.parse(resBody)

            let items = resReal.results;
            let itemInfo = {};

            for (let i = 0; i < items.length; i++) {
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
```

Once we have the items listed on Etsy, which is the result of our first API call, we have to get the images for the items. To do so, we make a single API request for each item returned. In other words, we make 25 API requests concurrently after our first API request. Since we need the item images before we store it in our database, we wait for the API requests to finish with the use of Promises. 

```javascript
const getImageFromEtsy = async function (itemObj, res) {
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
```
