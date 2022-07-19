const mongoose = require("mongoose");

const electricAppliancesSchema = new mongoose.Schema({
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

const electricAppliances = mongoose.model("electricAppliances", electricAppliancesSchema);

module.exports = electricAppliances;