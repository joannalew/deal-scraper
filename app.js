const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
const db = require('./config/keys').mongoURI;

const users = require("./routes/api/users");
const items = require("./routes/api/items");
const search = require("./routes/api/search");

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Deal Scraper Flex Project"));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
// app.use("/api/users/register", users);
// app.use("/api/users/login", users);
app.use('/api/items', items);
app.use('/api/search', search);