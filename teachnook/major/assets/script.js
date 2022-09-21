let weather = {
  api_key: 'b9a2235d8b69470187371250222109',

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
    document.querySelector('#temp-c').innerText = data.current.temp_c + '° C';
    document.querySelector('#temp-f').innerText = ' / ' + data.current.temp_f + '° F';
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
    for (let day = 0, i = 0; day <= 5; day++) {
      document.getElementsByClassName('forecast-min-temp-c')[day].innerText =
        data.forecast.forecastday[day].day.mintemp_c + '°C';
      document.getElementsByClassName('forecast-min-temp-f')[day].innerText =
			` / ${data.forecast.forecastday[day].day.mintemp_f}°F`;
      document.getElementsByClassName('forecast-avg-temp-c')[day].innerText =
        data.forecast.forecastday[day].day.avgtemp_c + '°C';
      document.getElementsByClassName('forecast-avg-temp-f')[day].innerText =
			` / ${data.forecast.forecastday[day].day.avgtemp_f}°F`;
      document.getElementsByClassName('forecast-max-temp-c')[day].innerText =
        data.forecast.forecastday[day].day.maxtemp_c + '°C';
      document.getElementsByClassName('forecast-max-temp-f')[day].innerText =
			` / ${data.forecast.forecastday[day].day.maxtemp_f}°F`;
      document.getElementsByClassName('forecast-datetime')[day].innerText = 
				data.forecast.forecastday[day].date;
      document.getElementsByClassName('forecast-day')[day].innerText = 
				weather.dayFetch(data.forecast.forecastday[day].date);
      document.getElementsByClassName('forecast-icon')[day]
				.setAttribute('src', data.forecast.forecastday[day].day.condition.icon);
      document.getElementsByClassName('forecast-description')[day].innerText =
        data.forecast.forecastday[day].day.condition.text;

			let dateDay = data.forecast.forecastday[day].date.split('-')[2];
			let dateMonth = data.forecast.forecastday[day].date.split('-')[1];
			let dateDisplay = `${dateDay}/${dateMonth}`;
			document.getElementsByClassName('forecast-day-link')[day].innerHTML = dateDisplay;

			for (let hour = 0; hour < 6; hour++, i++){
				let hours = data.forecast.forecastday[day].hour[4*hour].time.split(' ')[1].split(':')[0];
				let hourSuffix = hours >= 12 ? " PM":" AM"; 
				hours = ((hours + 11) % 12 + 1) + hourSuffix;

				document.getElementsByClassName('hour')[i].innerText = hours;
				document.getElementsByClassName('hour-temp-c')[i].innerHTML =
					`${data.forecast.forecastday[day].hour[4*hour].temp_c}°C`;
				document
					.getElementsByClassName('forecast-icon-hour')[i]
					.setAttribute('src', data.forecast.forecastday[day].hour[4*hour].condition.icon);
				document.getElementsByClassName('forecast-description-hour')[i].innerText =
					data.forecast.forecastday[day].hour[4*hour].condition.text;
			}
		}
  },

	dayFetch : function (date) {
		const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

		const thisDay = new Date(date);
		return weekday[thisDay.getDay()]
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
