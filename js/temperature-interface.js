var Temperature = require('./../js/temperature.js').temperatureModule;

var apiKey = require('./../.env').apiKey;

var displayTemp = function(city, tempData) {
  $('.showTemp').text("The temperature in " + city + " is " + tempData);
};

$(document).ready(function() {
  var currentWeatherObject = new Temperature();
  $('#cityTemp').click(function() {
    var city = $('#location-temp').val();
    $('#location-temp').val("");
    currentWeatherObject.getWeather(city, displayTemp);
    });
  });
