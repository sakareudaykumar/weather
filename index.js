const apiKey = "56de7e2ebe0249878e4dd81f680d9bae";
let inputEle = document.getElementById("input");

let btnEle = document.getElementById("btn");
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  let cityEle = document.getElementById("cityname");
  let tempEle = document.getElementById("temp");
  let humidityEle = document.getElementById("humidity");
  let windeEle = document.getElementById("wind");
  let tempImg = document.getElementById("tempicon");

  if (data.weather[0].main == "Clouds") {
    tempImg.src = "clouds.png";
  } else if (data.weather[0].main == "Clear") {
    tempImg.src = "clear.png";
  } else if (data.weather[0].main == "Clouds") {
    tempImg.src = "clouds.png";
  } else if (data.weather[0].main == "Rain") {
    tempImg.src = "rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    tempImg.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    tempImg.src = "mist.png";
  } else {
    tempImg.src = "clear.png";
  }

  cityEle.textContent = data.name;
  tempEle.textContent = `${data.main.temp}°c`;
  humidityEle.textContent = `${data.main.humidity}%`;
  windeEle.textContent = `${data.wind.speed}` + "Km/h";
};

btnEle.addEventListener("click", () => {
  checkWeather(inputEle.value);
});
