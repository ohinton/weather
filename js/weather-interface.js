var Weather = require('./../js/weather.js').weatherModule;

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#humidity').click(function() {
    var city = $('#location-humidity').val();
    $('#location-humidity').val("");
    $('.showLocation').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
    $('.showHumidity').text(error.responseJSON.message);
    });
  });
});
