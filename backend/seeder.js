const mongoose = require("mongoose");
const { resolve } = require('path');
require('dotenv').config({ path: resolve(__dirname, './config/.env') });
const Product = require("./models/Products");
const User = require("./models/Users")
const Cart = require("./models/Cart");
const products = require("./data/products");

mongoose.connect(process.env.MONGO_URL);
const seedData = async()=>{
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany();

        
        const createdUser = await User.create({
            name:"Admin User",
            email:"admin@example.com",
            password:"123456",
            role:'admin',
        });
        const userID = createdUser._id;
        const sampleProducts = products.map((product)=>{
            return {...product,user:userID};
        });
        await Product.insertMany(sampleProducts);
        console.log("Product data seeded successfully!");
        process.exit();
    } catch (error) {
        console.error("Error seeding the data:",error)
        process.exit(1);
    }
};
seedData();