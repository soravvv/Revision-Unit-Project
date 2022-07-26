const mongoose = require("mongoose");

const cartPush = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true }
});

const cart = mongoose.model("cart", cartPush);

module.exports = cart;