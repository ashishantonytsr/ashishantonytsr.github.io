// var location = prompt('Enter location');

(fetchData = () => {
  let API_KEY = '4ca72503760e4790a13140644220609';
  let api = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=new+jersey&days=5&alerts=yes`;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('current-temp').innerHTML = data.current.temp_c;
      document.getElementById('feels-like-temp').innerHTML = data.current.feelslike_c;
      document.getElementById('current-date').innerHTML = data.current.last_updated.split(' ')[0];
      document.getElementById('current-time').innerHTML = data.current.last_updated.split(' ')[1];
      document.getElementById('location-name').innerHTML = data.location.name;
      document.getElementById('location-region').innerHTML = data.location.region;
      document.getElementById('location-country').innerHTML = data.location.country;
      document.getElementById('location-lat').innerHTML = data.location.lat;
      document.getElementById('location-lon').innerHTML = data.location.lon;
      document.getElementById('condition-icon').setAttribute('src', data.current.condition.icon);
      document.getElementById('condition-text').setAttribute('src', data.current.condition.text);
      document.getElementById('current-wind').innerHTML = data.current.wind_kph;
      document.getElementById('current-precip').innerHTML = data.current.precip_mm;
      document.getElementById('current-humid').innerHTML = data.current.humidity;

      // console.log(data);
    });
})();

// document.getElementById('current-temp').innerHTML = wheather.temp.value;
