var apiKey = require('./../.env').apiKey;

function Temperature() {

}

Temperature.prototype.getWeather = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp);
  }).fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
  });
};

exports.temperatureModule = Temperature;

// function Temperature(kelvinInput) {
//   this.fahrenheit = Math.round(kelvinInput * (9/5) - 459.67);
//   this.celsius = Math.round(kelvinInput - 273.15);
// }
