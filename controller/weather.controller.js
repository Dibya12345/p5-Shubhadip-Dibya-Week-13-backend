var weatherService = require('../service/weather.service');
const weatherController = {
    getWeather: async (req, res) => {
        const city = req.query.city;
        const data = await weatherService.getWeather(city);
        res.status(200).json(data);
    }
};

module.exports = weatherController;