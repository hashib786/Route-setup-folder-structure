const express = require("express");
const homeController = require("../controller/home_controller");

const router = express.Router();


router.get('/', homeController.home);
router.use('/users', require('./users'));


module.exports = router;