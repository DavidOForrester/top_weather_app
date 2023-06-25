const getWeatherButton = document.getElementById("get-weather");

getWeatherButton.addEventListener("click", () => {
  const inputLocation = document.getElementById("location");
  const location = inputLocation.value;
  getWeather(location);
});

async function getWeather(location) {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=021675ea36b44361b9c73259232506&q=" +
        location
    );
    const weather = await response.json();
    const current = await weather.current;
    const tempC = await current.temp_c;
    updateDom(tempC);
  } catch(error) {
    console.log(error)
  }
}

function updateDom(temp) {
  const tempDiv = document.createElement("div");
  tempDiv.textContent = temp;

  document.body.appendChild(tempDiv);
}
