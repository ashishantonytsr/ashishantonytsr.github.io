let weather = {
  api_key: '4ca72503760e4790a13140644220609',

  fetchWeather: function (city) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.api_key}&q=${city}&days=7`)
      .then((res) => {
        if (!res.ok) {
          alert('No Weather Found');
          throw new Error('No Weather Found');
        }
        return res.json();
      })
      .then((data) => {
        this.displayWeather(data);
        this.displayForecast(data);
      });
  },

  displayWeather: (data) => {
    console.log(data);
    document.querySelector('#temp-c').innerText = data.current.temp_c + '°';
    document.querySelector('#temp-f').innerText = data.current.temp_f + '°';
    document.querySelector('#time').innerHTML = data.current.last_updated.split(' ')[1];
    document.querySelector('#city').innerHTML = data.location.name;
    document.querySelector('#region').innerHTML = data.location.region;
    document.querySelector('#country').innerHTML = data.location.country;
    document.querySelector('#icon').setAttribute('src', data.current.condition.icon);
    document.querySelector('.description').innerHTML = data.current.condition.text;
    document.querySelector('#wind').innerHTML = data.current.wind_kph + ' kph';
    document.querySelector('#humidity').innerHTML = data.current.humidity + ' %';
  },

  displayForecast: (data) => {
    // weather forecast
    for (let i = 1; i < 7; i++) {
      document.getElementsByClassName('forecast-min-temp-c')[i - 1].innerText =
        data.forecast.forecastday[i].day.mintemp_c + '°C';
      document.getElementsByClassName('forecast-min-temp-f')[i - 1].innerText =
        data.forecast.forecastday[i].day.mintemp_f + '°F';
      document.getElementsByClassName('forecast-avg-temp-c')[i - 1].innerText =
        data.forecast.forecastday[i].day.avgtemp_c + '°C';
      document.getElementsByClassName('forecast-avg-temp-f')[i - 1].innerText =
        data.forecast.forecastday[i].day.avgtemp_f + '°F';
      document.getElementsByClassName('forecast-max-temp-c')[i - 1].innerText =
        data.forecast.forecastday[i].day.maxtemp_c + '°C';
      document.getElementsByClassName('forecast-max-temp-f')[i - 1].innerText =
        data.forecast.forecastday[i].day.maxtemp_f + '°F';
      document.getElementsByClassName('forecast-datetime')[i - 1].innerText = data.forecast.forecastday[i].date;
      document
        .getElementsByClassName('forecast-icon')
        [i - 1].setAttribute('src', data.forecast.forecastday[i].day.condition.icon);
      document.getElementsByClassName('forecast-description')[i - 1].innerText =
        data.forecast.forecastday[i].day.condition.text;
    }
  },

  search: function () {
    this.fetchWeather(document.querySelector('.search-bar').value);
  },
};

document.querySelector('#search-button').addEventListener('click', function () {
  weather.search(document.querySelector('.search-bar').value);
});

document.querySelector('.search-bar').addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    weather.search();
  }
});

weather.fetchWeather('new delhi');

// weather forecast button
// document.querySelector('.forecast-link').addEventListener('click', function () {
//   weather.displayForecast(document.querySelector('.search-bar').value);
// });
