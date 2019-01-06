const express = require("express");
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .limit(20)
        .then(items => res.json(items))
        .catch(err => console.log(err))
});

router.post('/create', (req, res) => {
    Item.findOne({ storeId: req.body.storeId })
        .then(item => {
            if (item) {
                return res.status(400).json({ itemId: "Item already created" });
            }
            else {
                const newItem = new Item({
                    store: req.body.store,
                    storeId: req.body.storeId,
                    storeUrl: req.body.storeUrl,
                    storeImg: req.body.storeImg,
                    title: req.body.title,
                    price: req.body.price
                });
                newItem.save()
                       .then(item => res.json(item))
                       .catch(err => console.log(err));
            }
        })
});

router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err =>
            res.status(404).json({ noitemfound: 'No item found with that ID' })
        );
});

router.get('/store/:store_name', (req, res) => {
    Item.find({store: req.params.store_name})
        .then(items => res.json(items))
        .catch(err =>
            res.status(404).json({ noitemsfound: 'No items found from that store' }
        )
    );
});

module.exports = router;