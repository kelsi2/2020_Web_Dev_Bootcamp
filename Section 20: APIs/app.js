const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=ba3c636726be0fc2e52c10ee17734d84&units=metric`;

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
    });
  });

  res.send("Server is up and running.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
