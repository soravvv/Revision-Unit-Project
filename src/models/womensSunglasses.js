const mongoose = require("mongoose");

const womens = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true }
});

const womensSunglasses = mongoose.model("womensSunglasses", womens);

module.exports = womensSunglasses;