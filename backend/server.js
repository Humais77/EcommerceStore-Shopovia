const cors = require('cors');
const express = require('express');
const { resolve } = require('path');
require('dotenv').config({ path: resolve(__dirname, './config/.env') });
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoute")
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const checkoutRoutes = require("./routes/checkoutRoutes")
const orderRoutes= require("./routes/orderRoutes")
const uploadRoutes =require("./routes/uploadRoutes")
const subscribRoutes =require("./routes/subscribRoutes")
const adminRoutes =require("./routes/adminRoutes")
const productAdminRoutes =require("./routes/productAdminRoutes")
const adminOrderRoutes =require("./routes/adminOrderRoutes")

const app = express();

app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(express.json());

const PORT  = process.env.PORT || 5234;
connectDB();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15'
});
app.get('/',(req,res)=>{
    res.send("Welcome to Rabbit Api!");
})
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/checkout",checkoutRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/upload",uploadRoutes);
app.use("/api",subscribRoutes);

app.use("/api/admin/users",adminRoutes);
app.use("/api/admin/products",productAdminRoutes);
app.use("/api/admin/orders",adminOrderRoutes);

app.get('/config', (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISH_KEY,
    });
});

app.post('/create-payment-intent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "eur",
            amount: 1999,
            automatic_payment_methods: {  
                enabled: true,
            },
        });
        res.send({ clientSecret: paymentIntent.client_secret })  
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            }
        });
    }
});




app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
