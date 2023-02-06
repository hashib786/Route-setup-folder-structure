const express = require("express");
const homeController = require("../controller/home_controller");

const router = express.Router();


console.log("Router Call");

router.get('/', homeController.home);


module.exports = router;