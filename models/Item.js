const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    store: {
        type: String,
        required: true
    },
    storeId: {
        type: String,
        required: true
    },
    storeUrl: {
        type: String,
        required: true
    },
    storeImg: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    priceHistory: {
        type: Array,
        required: true,
        default: [40, 30, 40, 35, 37, 35, 40]
    },
    followers: {
        type: Array,
        required: true,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('items', ItemSchema);