const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://Soravm:vj3732il3@cluster0.45amlnm.mongodb.net/?retryWrites=true&w=majority");
}

module.exports = connect;