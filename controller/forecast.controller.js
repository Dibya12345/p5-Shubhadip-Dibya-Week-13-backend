var foreCastservice = require('../service/weather.service');
const forecastController = {
    getForecast: async (req, res) => {
        const city = req.params.city;
        const days = req.params.days;
        const data = await foreCastservice.getForecast(city, days);
        res.status(200).json(data);
    }
};

module.exports = forecastController;