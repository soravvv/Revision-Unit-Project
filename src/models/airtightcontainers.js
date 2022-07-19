const mongoose = require("mongoose");

const airTightContainersSchema = new mongoose.Schema({
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

const airTightContainers = mongoose.model("airTightContainer", airTightContainersSchema);

module.exports = airTightContainers;