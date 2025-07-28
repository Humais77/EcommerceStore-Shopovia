const express =require("express");
const Product = require("../models/Products")
const {protect,admin}= require("../middleware/authMiddleware");
const router = express.Router();

router.get("/",protect,admin,async(req,res)=>{
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});
module.exports =router;