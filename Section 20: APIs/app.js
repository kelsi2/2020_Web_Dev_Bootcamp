const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=ba3c636726be0fc2e52c10ee17734d84&units=metric`;

  https.get(url, (response) => {
    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write(`<p>The weather is currently ${weatherDescription}</p>`);
      res.write(
        `<h1>The temperature in Vancouver is ${temp} degrees Celsius.</h1>`
      );
      res.write(`<img src=${imageURL} />`);

      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
