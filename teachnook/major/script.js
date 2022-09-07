let weather = {
  api_key: '4ca72503760e4790a13140644220609',

  fetchWeather: function (city) {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.api_key}&q=${city}&days=5`)
      .then((res) => {
        if (!res.ok) {
          alert('No Weather Found');
          throw new Error('No Weather Found');
        }
        return res.json();
      })
      .then((data) => this.displayWeather(data));
  },

  displayWeather: (data) => {
    console.log(data);
    document.querySelector('#temp').innerText = data.current.temp_c + '°';
    document.querySelector('#time').innerHTML = data.current.last_updated.split(' ')[1];
    document.querySelector('#city').innerHTML = data.location.name;
    document.querySelector('#region').innerHTML = data.location.region;
    document.querySelector('#country').innerHTML = data.location.country;
    document.querySelector('#icon').setAttribute('src', data.current.condition.icon);
    document.querySelector('.description').innerHTML = data.current.condition.text;
    document.querySelector('#wind').innerHTML = data.current.wind_kph;
    document.querySelector('#humidity').innerHTML = data.current.humidity;
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

weather.fetchWeather('los angeles');
