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