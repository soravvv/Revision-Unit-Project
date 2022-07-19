const express = require("express");
const app = express();
const connect = require("./configs/db");
const cors = require("cors");
const PORT = process.env.PORT || 2345;

app.use(cors());
app.use(express.json());

const KitchenTools = require("./models/kitchenToolsApi");
const AirTightContainers = require("./models/airtightcontainers");
const GasLighters = require("./models/gasLighters");
const ElectricAppliances = require("./models/electricappliances");
const BathroomAccessories = require("./models/bathroomAccessories");

// Kitchen Tools API Starts //

app.post("/kitchentools", async (req, res) => {

    try {
        const kitchentools = await KitchenTools.create(req.body);
        return res.send(kitchentools);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/kitchentools", async (req, res) => {
    try {
        const kitchentools = await KitchenTools.find().lean().exec();
        return res.send(kitchentools);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/kitchentools/:id", async (req, res) => {
    try {
        const kitchentools = await KitchenTools.findById(req.params.id);
        return res.send(kitchentools);
    }

    catch (err) {
        res.send(err.message);
    }
});








// Air Tight Containers API Starts //

app.post("/airtightcontainers", async (req, res) => {

    try {
        const airtightcontainers = await AirTightContainers.create(req.body);
        return res.send(airtightcontainers);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/airtightcontainers", async (req, res) => {
    try {
        const airtightcontainers = await AirTightContainers.find().lean().exec();
        return res.send(airtightcontainers);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/airtightcontainers/:id", async (req, res) => {
    try {
        const airtightcontainers = await AirTightContainers.findById(req.params.id);
        return res.send(airtightcontainers);
    }

    catch (err) {
        res.send(err.message);
    }
});






// Gas Lighters API Starts //

app.post("/gaslighters", async (req, res) => {

    try {
        const gaslighters = await GasLighters.create(req.body);
        return res.send(gaslighters);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/gaslighters", async (req, res) => {
    try {
        const gaslighters = await GasLighters.find().lean().exec();
        return res.send(gaslighters);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/gaslighters/:id", async (req, res) => {
    try {
        const gaslighters = await GasLighters.findById(req.params.id);
        return res.send(gaslighters);
    }

    catch (err) {
        res.send(err.message);
    }
});




// Electric Appliances API Starts //

app.post("/electricappliances", async (req, res) => {

    try {
        const electricappliances = await ElectricAppliances.create(req.body);
        return res.send(electricappliances);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/electricappliances", async (req, res) => {
    try {
        const electricappliances = await ElectricAppliances.find().lean().exec();
        return res.send(electricappliances);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/electricappliances/:id", async (req, res) => {
    try {
        const electricappliances = await ElectricAppliances.findById(req.params.id);
        return res.send(electricappliances);
    }

    catch (err) {
        res.send(err.message);
    }
});




// Bathroom Accessories API Starts //

app.post("/bathroomaccessories", async (req, res) => {

    try {
        const bathroomaccessories = await BathroomAccessories.create(req.body);
        return res.send(bathroomaccessories);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/bathroomaccessories", async (req, res) => {
    try {
        const bathroomaccessories = await BathroomAccessories.find().lean().exec();
        return res.send(bathroomaccessories);
    }

    catch (err) {
        res.send(err.message);
    }
});

app.get("/bathroomaccessories/:id", async (req, res) => {
    try {
        const bathroomaccessories = await BathroomAccessories.findById(req.params.id);
        return res.send(bathroomaccessories);
    }

    catch (err) {
        res.send(err.message);
    }
});





app.listen(PORT, async function () {
    try {
        await connect();
        console.log(`Live server started at port ${PORT}`);
    }

    catch (err) {
        console.log(err.message);
    }
})