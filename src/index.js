const express = require("express");
const app = express();
const connect = require("./configs/db");
const PORT = process.env.PORT || 2500;
const MensSunglasses = require("./models/mensSunglasses");
const WomensSunglasses = require("./models/womensSunglasses");
const Cart = require("./models/cart");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// MENS SUNGLASSES //
app.get("/menssunglasses", async (req, res) => {

    try {
        const mensSunglasses = await MensSunglasses.find().lean().exec();
        return res.send(mensSunglasses);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/menssunglasses/:id", async (req, res) => {

    try {
        const mensSunglasses = await MensSunglasses.findById(req.params.id);
        res.send(mensSunglasses);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.post("/menssunglasses", async (req, res) => {

    try {
        const mensSunglasses = await MensSunglasses.create(req.body);
        res.send(mensSunglasses);
    }

    catch (err) {
        res.send(err.message);
    }
})



// WOMENS SUNGLASSES //
app.get("/womenssunglasses", async (req, res) => {

    try {
        const womensSunglasses = await WomensSunglasses.find().lean().exec();
        return res.send(womensSunglasses);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/womenssunglasses/:id", async (req, res) => {

    try {
        const womensSunglasses = await WomensSunglasses.findById(req.params.id);
        res.send(womensSunglasses);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.post("/womenssunglasses", async (req, res) => {

    try {
        const womensSunglasses = await WomensSunglasses.create(req.body);
        res.send(womensSunglasses);
    }

    catch (err) {
        res.send(err.message);
    }
})



// CART API //
app.get("/cart", async (req, res) => {

    try {
        const cart = await Cart.find().lean().exec();
        return res.send(cart);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.delete("/cart/:id", async (req, res) => {

    try {
        const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
        res.send(cart);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.post("/cart", async (req, res) => {

    try {
        const cart = await Cart.create(req.body);
        res.send(cart);
    }

    catch (err) {
        res.send(err.message);
    }
});




app.listen(PORT, async function () {
    try {
        await connect();
        console.log("Live Server Started At Port", PORT);
    }

    catch (err) {
        console.log(err.message);
    }
})