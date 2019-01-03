const express = require("express");
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', (req, res) => res.json({msg: "This is the items route"}));
router.get("/test", (req, res) => res.json({ msg: "This is the items test route" }));


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

module.exports = router;