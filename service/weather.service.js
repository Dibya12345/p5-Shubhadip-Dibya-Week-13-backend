const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const dotenv = require('dotenv');
dotenv.config();

const weatherService = {
    getWeather: async (city) => {
        const response = await fetch(`${process.env.BASE_URL}/current.json?key=${process.env.API_KEY}&q=${city}&aqi=no`);
        const data = await response.json();
        return data;
    },
    getForecast : async (city, days) => {
        const response = await fetch(`${process.env.BASE_URL}/forecast.json?key=${process.env.API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`);
        const data = await response.json();
        return data;
    }
}

module.exports = weatherService;