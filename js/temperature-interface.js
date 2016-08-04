var Temperature = require('./../js/temperature.js').temperatureModule;

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#cityTemp').click(function() {
    var city = $('#location-temp').val();
    $('#location-temp').val("");
    var unitType = $("#temp-unit").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + '&appid=' + apiKey).then(function(response){
    var currentWeatherObject = new Temperature(response.main.temp);
    var tempOutput;
    if (unitType === "Fahrenheit"){
      tempOutput = currentWeatherObject.fahrenheit
    } else {
      tempOutput = currentWeatherObject.celsius
    }

    $(".showTemp").text("The temperature in " + city + " is " + tempOutput + " degrees!");

    }).fail(function(error){
   $("#error-message").text(error.responseJSON.message);
    });
  });
});
