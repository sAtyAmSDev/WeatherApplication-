const API_KEY = `19a7056560ad4cb6f04ab957b076cf12`;
const form = document.querySelector("form");
const Weather = document.querySelector(".container");
const Search = document.getElementById("Search");

const getWeather = async (city) => {
  const Api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(Api);
  const data = await response.json();
  showWeather(data);
};

const showWeather = (data) => {
  console.log(data);
  const imageUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  Weather.innerHTML = `
    <img src=${imageUrl} alt="" />
    <div class="title">
      <h2>${data.main.temp} ℃</h2>
      <h3>${data.name}</h3>
    </div>
  `;
};

form.addEventListener("submit", (event) => {
  getWeather(Search.value);
  event.preventDefault();
});
