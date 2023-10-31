// Ok so this is about the worst way you can do this.

// Since no back end so I probably will store it in a json file and have users enter their own api key.

const api = ""; // Don't store the api key in this file bro
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=boston";

async function checkWeather() {
  const result = await fetch(apiUrl + `&appid=${api}`);
  var weatherData = await result.json();

  console.log(weatherData);
}

checkWeather();
