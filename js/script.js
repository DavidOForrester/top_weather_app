const getWeatherButton = document.getElementById("get-weather");

getWeatherButton.addEventListener("click", () => {
  getWeather();
});

async function getWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=021675ea36b44361b9c73259232506&q=london"
  );
  const weather = await response.json()
  console.log(weather);
}
