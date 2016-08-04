var apiKey = require('./../.env').apiKey;

function Temperature(kelvinInput) {
  this.fahrenheit = Math.round(kelvinInput * (9/5) - 459.67);
  this.celsius = Math.round(kelvinInput - 273.15);
}


exports.temperatureModule = Temperature;
