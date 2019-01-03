const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.json({msg: "This is the items route"}));
router.get("/test", (req, res) => res.json({ msg: "This is the items test route" }));

module.exports = router;