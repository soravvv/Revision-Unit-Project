const mongoose = require("mongoose");

const mens = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true }
});

const mensSunglasses = mongoose.model("mensSunglasses", mens);

module.exports = mensSunglasses;