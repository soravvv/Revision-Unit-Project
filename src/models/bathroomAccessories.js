const mongoose = require("mongoose");

const bathroomAccessoriesSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})

const bathroomAccessories = mongoose.model("bathroomAccessories", bathroomAccessoriesSchema);

module.exports = bathroomAccessories;