const express = require("express");

const route = express.Router();
const controller = require("../Controllers/ImageController");
route.post("/upload", controller.GetData);

module.exports = route;
