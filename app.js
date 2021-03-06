const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

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

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use('/api/items', items);
app.use('/api/search', search);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}