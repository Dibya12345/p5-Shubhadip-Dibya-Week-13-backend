var express = require("express");

var app = express();
const port = process.env.PORT || 3000;

var weatherRoutes = require("./routes/weather.routes.js");
var forecastRoutes = require("./routes/forecast.routes.js");

app.use("/weather", weatherRoutes);
app.use("/forecast", forecastRoutes);

app.listen(port, function () {
  console.log(`Listening on port http://localhost:${port}`);
});
