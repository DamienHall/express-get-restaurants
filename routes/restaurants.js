const { Router } = require("express");
const Restaurant = require("../models/Restaurant");

const router = Router();

router.post("/", async (req, res) => {
    await Restaurant.create(req.body);
    res.send("Resource successfully created");
});

router.get("/", async (req, res) => {
    res.json(await Restaurant.findAll());
});

router.get("/:id", async (req, res) => {
    res.json(await Restaurant.findByPk(req.params.id));
});

router.put("/:id", async (req, res) => {
    let restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.update(req.body);
    await restaurant.save();
    res.send("Resource successfully updated");
});

router.delete("/:id", async (req, res) => {
    let restaurant = await Restaurant.findByPk(req.params.id);
    restaurant.destroy();
    res.send("Resource successfully deleted");
});

module.exports = router;
