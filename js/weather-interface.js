var Weather = require('./../js/weather.js').weatherModule;

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showLocation').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $('.showTemperature').text("The temperature in " + city + " is " + response.main.temp + "K");
    }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
    });
  });
});
