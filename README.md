# Welcome to DealCliq!
DealCliq is a site that tracks an item's price on various sites. It offers price history charts, price watches, and price drop alerts.

### Background and Overview
Tired of buying something online and seeing the same item on sale the day after? Well, look no further! DealCliq will monitor the price of items for you, and send you an email alert when the item goes on sale. DealCliq will also show you the price history of the item in a nice, neat graphs, so you can watch the price for yourself. It's that easy!

We will need to:
* Create a web scraper to get prices from various sites
* Keep prices in our database if the item is being monitored by a User
* Display prices as graphs on website for better visualization
* Allow User to 'follow' items to monitor prices
* Email User once item is on sale

### Functionality and MVP
- [ ] Website with landing page deployed on Heroku
- [ ] User authorization: sign up, log in, sign out
- [ ] User can 'follow' multiple items to monitor their price
- [ ] Send user an email if an item is on sale
- [ ] Web scraper to track item's price on various sites
- [ ] Graph visualization of price history
- [ ] Production README

#### Bonus Features
- [ ] Show most popular tracked items
- [ ] Note functionality in data visualization
- [ ] Send user an email only if item is less than User-set price threshold
- [ ] Search all items being tracked

### Technologies and Technical Challenges
We plan to use:
* MongoDB, mLab
* Node.js, Express.js
* React, Redux
* HTML, CSS, and Javascript

Some challenges we expect to encounter are:
* How to get prices from other websites
* How to automate the process of getting prices from other websites
* How to visualize the data cleanly while providing User interaction or animations

### Things Accomplished Over the Holidays
* We followed the MERN tutorial and created a Twitter clone
* We discarded our game idea and fleshed out our web scraper idea
* We looked into [how to create a web scraper using Node](https://scotch.io/tutorials/scraping-the-web-with-node-js)
* We created the repo, added the dependencies, set up our database, and deployed our website to Heroku
* We wrote the README and planned out our schedule for the upcoming week

### Group Members and Work Breakdown
** Dennis Myasnyankin, Daniel Moon, Jerrik Shaw, Joanna Lew ** 

Day 1
Jerrik & Dennis - User authentication
Jerrik & Dennis - Save Users to database
Joanna & Daniel - Create web crawler
Joanna & Daniel - Get prices from various sites, sites to be decided

Day 2
Jerrik & Dennis - Signup and login forms, signout button
Jerrik & Dennis - Session with jwt authentication
Joanna & Daniel - Create item with price info from web crawler
Joanna & Daniel - Save item and prices to database

Day 3 
Jerrik & Dennis - Data visualization animations, graphs
Joanna & Daniel - Create item form, item info container

Day 4
Jerrik & Dennis - Email User if item goes on sale
Joanna & Daniel - Allow User to 'follow' items they want to price track
All - begin seeding database

Day 5
All - finish frontend pages, finish CSS
All - add more seeds to database
All - fix any bugs, remove console logs
All - make sure heroku is up

Day 6
Jerrik & Dennis - Search feature for items currently in database
Joanna & Daniel - Show items with most number of Users following
