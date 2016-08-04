var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showHumidity').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#humidity').click(function() {
    var city = $('#location-humidity').val();
    $('#location-humidity').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
