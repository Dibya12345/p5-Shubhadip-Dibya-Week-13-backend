const express = require('express');

const router = express.Router();

const forecastController = require('../controller/forecast.controller.js');

router.get('/:city/:days', forecastController.getForecast);

module.exports = router;