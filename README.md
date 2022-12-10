# Welcome to the markdown copy to clipboard plugin


<!-- Add a copy to clipboard functionality in markdown -->

## How to use

1. Clone the repo
2. cd into the repo p5-shubhadip-dibya-week13-backend
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000/` in your browser

## Features
<!-- javascript code -->
#### Requesting weather data
```
http://localhost:3000/weather?city=London
```
#### Response 
```json
{"location":{"name":"London","region":"City of London, Greater London","country":"United Kingdom","lat":51.52,"lon":-0.11,"tz_id":"Europe/London","localtime_epoch":1670671621,"localtime":"2022-12-10 11:27"},"current":{"last_updated_epoch":1670670900,"last_updated":"2022-12-10 11:15","temp_c":2,"temp_f":35.6,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":6.9,"wind_kph":11.2,"wind_degree":230,"wind_dir":"SW","pressure_mb":1011,"pressure_in":29.85,"precip_mm":0,"precip_in":0,"humidity":80,"cloud":0,"feelslike_c":-0.7,"feelslike_f":30.8,"vis_km":10,"vis_miles":6,"uv":2,"gust_mph":6.7,"gust_kph":10.8}}
```
