// Ok so this is about the worst way you can do this.

// Since no back end so I probably will store it in a json file and have users enter their own api key.

window.onload = function () {
  let apiKey = localStorage.getItem("weatherApiKey");

  if (!apiKey) {
    // API key not found, show a popup to ask for it
    apiKey = prompt("Please enter your API key:");
  }
  if (apiKey) {
    // Save the entered API key to localStorage
    localStorage.setItem("weatherApiKey", apiKey);
  }
};

const api = localStorage.getItem("weatherApiKey");
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const searchbttn = document.querySelector(".search button");

async function checkWeather(city) {
  const result = await fetch(apiUrl + city + `&appid=${api}`);
  var weatherData = await result.json();

  console.log(weatherData);

  document.querySelector(".city").textContent = weatherData.name;
  document.querySelector(".temp").textContent =
    Math.round(weatherData.main.temp) + "°C";
  document.querySelector(".wind").innerHTML = weatherData.wind.speed + "km/h";
  document.querySelector(".humidity").textContent =
    weatherData.main.humidity + "%";
}

window.onload = function () {
  let city = localStorage.getItem("weatherCity");
  if (!city) {
    city = "Boston";
    localStorage.setItem("weatherCity", city);
    checkWeather(city);
  } else {
    checkWeather(city);
  }
};

searchbttn.addEventListener("click", () => {
  localStorage.setItem("weatherCity", search.value);
  checkWeather(search.value);
});
