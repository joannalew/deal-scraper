# Welcome to DealCliq!

[DealCliq Live](http://deal-cliq.herokuapp.com/#/)

![dealcliq](https://i.imgur.com/yLPO1TI.jpg)

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

![dealcliq-search](https://i.imgur.com/J6eHgZl.jpg)
