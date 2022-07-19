const mongoose = require("mongoose");

const gasLightersSchema = new mongoose.Schema({
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
});

const gasLighters = mongoose.model("gaslighter", gasLightersSchema);

module.exports = gasLighters;