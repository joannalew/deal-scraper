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
    Item.findOne({ storeId: req.body.item.storeId })
        .then(item => {
            if (item) {
                item.followers.push(req.body.user.id)
                item.save()
                    .then(updatedItem => res.json(updatedItem))
                    .catch(err => console.log(err));
            }
            else {
                const newItem = new Item({
                    store: req.body.item.store,
                    storeId: req.body.item.storeId,
                    storeUrl: req.body.item.storeUrl,
                    storeImg: req.body.item.storeImg,
                    title: req.body.item.title,
                    price: req.body.item.price,
                    followers: [req.body.user.id]
                });
                newItem.save()
                       .then(item => res.json(item))
                       .catch(err => console.log(err));
            }
        })
        .catch(err => {console.log(err)})
});

router.post('/follow', (req, res) => {
    Item.findOne({ storeId: req.body.item.storeId })
        .then(item => {
            item.followers.push(req.body.user.id)
            item.save()
                .then(updatedItem => res.json(updatedItem))
                .catch(err => console.log(err));
        })
        .catch(err => {console.log(err)})
});

router.post('/unfollow', (req, res) => {
    Item.findOne({ storeId: req.body.item.storeId })
        .then(item => {
            const index = item.followers.indexOf(req.body.user.id);
            if (index > -1) {
                item.followers.splice(index, 1);
            }
            item.save()
                .then(updatedItem => res.json(updatedItem))
                .catch(err => console.log(err))
        })
        .catch(err => {console.log(err)})
})

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

router.post('/following', (req, res) => {
    Item.find({ followers: req.body.user.id })
        .then(items => {
            let itemObj = {};
            items.forEach(item => { itemObj[item._id] = item })
            res.json(itemObj);
        })
        .catch(err => console.log(err))
})

module.exports = router;