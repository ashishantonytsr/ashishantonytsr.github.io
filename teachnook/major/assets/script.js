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
    document.querySelector('#datetime').innerHTML = data.current.last_updated;
    document.querySelector('#city').innerHTML = data.location.name;
    document.querySelector('#region').innerHTML = data.location.region;
    document.querySelector('#country').innerHTML = data.location.country;
    document.querySelector('#icon').setAttribute('src', data.current.condition.icon);
    document.querySelector('.description').innerHTML = data.current.condition.text;
    document.querySelector('#wind').innerHTML = data.current.wind_kph + ' Km/hr';
    document.querySelector('#humidity').innerHTML = data.current.humidity + ' %';
  },

  displayForecast: (data) => {
    // weather forecast
    // day 1
    document.getElementsByClassName('forecast-min-temp-c')[0].innerText =
      data.forecast.forecastday[0].day.mintemp_c + '°C';
    document.getElementsByClassName('forecast-min-temp-f')[0].innerText =
      data.forecast.forecastday[0].day.mintemp_f + '°F';
    document.getElementsByClassName('forecast-avg-temp-c')[0].innerText =
      data.forecast.forecastday[0].day.avgtemp_c + '°C';
    document.getElementsByClassName('forecast-avg-temp-f')[0].innerText =
      data.forecast.forecastday[0].day.avgtemp_f + '°F';
    document.getElementsByClassName('forecast-max-temp-c')[0].innerText =
      data.forecast.forecastday[0].day.maxtemp_c + '°C';
    document.getElementsByClassName('forecast-max-temp-f')[0].innerText =
      data.forecast.forecastday[0].day.maxtemp_f + '°F';
    document.getElementsByClassName('forecast-datetime')[0].innerText = data.forecast.forecastday[0].date;
    document
      .getElementsByClassName('forecast-icon')[0]
      .setAttribute('src', data.forecast.forecastday[0].day.condition.icon);
    document.getElementsByClassName('forecast-description')[0].innerText =
      data.forecast.forecastday[0].day.condition.text;

    // day 2
    document.getElementsByClassName('forecast-min-temp-c')[1].innerText =
      data.forecast.forecastday[1].day.mintemp_c + '°C';
    document.getElementsByClassName('forecast-min-temp-f')[1].innerText =
      data.forecast.forecastday[1].day.mintemp_f + '°F';
    document.getElementsByClassName('forecast-avg-temp-c')[1].innerText =
      data.forecast.forecastday[1].day.avgtemp_c + '°C';
    document.getElementsByClassName('forecast-avg-temp-f')[1].innerText =
      data.forecast.forecastday[1].day.avgtemp_f + '°F';
    document.getElementsByClassName('forecast-max-temp-c')[1].innerText =
      data.forecast.forecastday[1].day.maxtemp_c + '°C';
    document.getElementsByClassName('forecast-max-temp-f')[1].innerText =
      data.forecast.forecastday[1].day.maxtemp_f + '°F';
    document.getElementsByClassName('forecast-datetime')[1].innerText = data.forecast.forecastday[1].date;
    document
      .getElementsByClassName('forecast-icon')[1]
      .setAttribute('src', data.forecast.forecastday[1].day.condition.icon);
    document.getElementsByClassName('forecast-description')[1].innerText =
      data.forecast.forecastday[1].day.condition.text;

    // day 3
    document.getElementsByClassName('forecast-min-temp-c')[2].innerText =
      data.forecast.forecastday[2].day.mintemp_c + '°C';
    document.getElementsByClassName('forecast-min-temp-f')[2].innerText =
      data.forecast.forecastday[2].day.mintemp_f + '°F';
    document.getElementsByClassName('forecast-avg-temp-c')[2].innerText =
      data.forecast.forecastday[2].day.avgtemp_c + '°C';
    document.getElementsByClassName('forecast-avg-temp-f')[2].innerText =
      data.forecast.forecastday[2].day.avgtemp_f + '°F';
    document.getElementsByClassName('forecast-max-temp-c')[2].innerText =
      data.forecast.forecastday[2].day.maxtemp_c + '°C';
    document.getElementsByClassName('forecast-max-temp-f')[2].innerText =
      data.forecast.forecastday[2].day.maxtemp_f + '°F';
    document.getElementsByClassName('forecast-datetime')[2].innerText = data.forecast.forecastday[2].date;
    document
      .getElementsByClassName('forecast-icon')[2]
      .setAttribute('src', data.forecast.forecastday[2].day.condition.icon);
    document.getElementsByClassName('forecast-description')[2].innerText =
      data.forecast.forecastday[2].day.condition.text;

    // day 4
    document.getElementsByClassName('forecast-min-temp-c')[3].innerText =
      data.forecast.forecastday[3].day.mintemp_c + '°C';
    document.getElementsByClassName('forecast-min-temp-f')[3].innerText =
      data.forecast.forecastday[3].day.mintemp_f + '°F';
    document.getElementsByClassName('forecast-avg-temp-c')[3].innerText =
      data.forecast.forecastday[3].day.avgtemp_c + '°C';
    document.getElementsByClassName('forecast-avg-temp-f')[3].innerText =
      data.forecast.forecastday[3].day.avgtemp_f + '°F';
    document.getElementsByClassName('forecast-max-temp-c')[3].innerText =
      data.forecast.forecastday[3].day.maxtemp_c + '°C';
    document.getElementsByClassName('forecast-max-temp-f')[3].innerText =
      data.forecast.forecastday[3].day.maxtemp_f + '°F';
    document.getElementsByClassName('forecast-datetime')[3].innerText = data.forecast.forecastday[3].date;
    document
      .getElementsByClassName('forecast-icon')[3]
      .setAttribute('src', data.forecast.forecastday[3].day.condition.icon);
    document.getElementsByClassName('forecast-description')[3].innerText =
      data.forecast.forecastday[3].day.condition.text;

    // day 5
    document.getElementsByClassName('forecast-min-temp-c')[4].innerText =
      data.forecast.forecastday[4].day.mintemp_c + '°C';
    document.getElementsByClassName('forecast-min-temp-f')[4].innerText =
      data.forecast.forecastday[4].day.mintemp_f + '°F';
    document.getElementsByClassName('forecast-avg-temp-c')[4].innerText =
      data.forecast.forecastday[4].day.avgtemp_c + '°C';
    document.getElementsByClassName('forecast-avg-temp-f')[4].innerText =
      data.forecast.forecastday[4].day.avgtemp_f + '°F';
    document.getElementsByClassName('forecast-max-temp-c')[4].innerText =
      data.forecast.forecastday[4].day.maxtemp_c + '°C';
    document.getElementsByClassName('forecast-max-temp-f')[4].innerText =
      data.forecast.forecastday[4].day.maxtemp_f + '°F';
    document.getElementsByClassName('forecast-datetime')[4].innerText = data.forecast.forecastday[4].date;
    document
      .getElementsByClassName('forecast-icon')[4]
      .setAttribute('src', data.forecast.forecastday[4].day.condition.icon);
    document.getElementsByClassName('forecast-description')[4].innerText =
      data.forecast.forecastday[4].day.condition.text;

    // day 6
    document.getElementsByClassName('forecast-min-temp-c')[5].innerText =
      data.forecast.forecastday[5].day.mintemp_c + '°C';
    document.getElementsByClassName('forecast-min-temp-f')[5].innerText =
      data.forecast.forecastday[5].day.mintemp_f + '°F';
    document.getElementsByClassName('forecast-avg-temp-c')[5].innerText =
      data.forecast.forecastday[5].day.avgtemp_c + '°C';
    document.getElementsByClassName('forecast-avg-temp-f')[5].innerText =
      data.forecast.forecastday[5].day.avgtemp_f + '°F';
    document.getElementsByClassName('forecast-max-temp-c')[5].innerText =
      data.forecast.forecastday[5].day.maxtemp_c + '°C';
    document.getElementsByClassName('forecast-max-temp-f')[5].innerText =
      data.forecast.forecastday[5].day.maxtemp_f + '°F';
    document.getElementsByClassName('forecast-datetime')[5].innerText = data.forecast.forecastday[5].date;
    document
      .getElementsByClassName('forecast-icon')[5]
      .setAttribute('src', data.forecast.forecastday[5].day.condition.icon);
    document.getElementsByClassName('forecast-description')[5].innerText =
      data.forecast.forecastday[5].day.condition.text;
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
