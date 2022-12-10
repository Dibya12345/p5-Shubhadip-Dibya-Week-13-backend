const express = require('express');

const router = express.Router();

const weatherController = require('../controller/weather.controller.js');

router.get('/', weatherController.getWeather);

module.exports = router;