const express = require("express");
const app = express();
const router = require("../routes/restaurants.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/restaurants", router);

module.exports = app;
