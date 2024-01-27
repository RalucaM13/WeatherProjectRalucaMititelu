new Date();
let now = new Date();

function weekDayNow() {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayofWeek = weekDays[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let formattedHours = hours < 10 ? `0${hours}` : hours;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  let formattedTime = `${formattedHours}:${formattedMinutes}`;
  let currentTime = document.querySelector(".formatted-time");
  currentTime.innerHTML = `${dayofWeek}  ${formattedTime},`;
  return currentTime;
}
weekDayNow();

function citySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  searchCity(searchInput.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearch);

function searchCity(city) {
  let apiKey = "b13fe4d2a8e30dd1a60bbd2oaf1tb1be";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

let form = document.querySelector(".city-form");
form.addEventListener("submit", citySearch);

function displayTemp(response) {
  let displayedCity = document.querySelector(".current-city");
  displayedCity.innerHTML = response.data.city;
  let tempElement = document.querySelector(".current-temperature-value");
  let tempNow = Math.round(response.data.temperature.current);
  tempElement.innerHTML = `${tempNow}`;
  return tempNow;
}
