const mongoose = require("mongoose");

const kitchenToolsSchema = new mongoose.Schema({
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

const KitchenTools = new mongoose.model("KitchenTool", kitchenToolsSchema);

module.exports = KitchenTools; 