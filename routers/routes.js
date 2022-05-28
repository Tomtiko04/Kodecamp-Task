const express = require("express");
const router = express.Router();
const schema = require("../model/schema");



router.get("/", async(req, res) => {
    try {
        const data = await schema.find();
        res.json(data);
    } catch (err) {
        console.log(`error: ${err}`);
    }
});


router.post("/", async(req, res) => {

    try {
        const data = await schema.create(req.body);
        res.json(data);
    } catch (err) {
        console.log(`error: ${err}`);
    }
});



module.exports = router;