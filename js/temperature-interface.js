var Temperature = require('./../js/temperature.js').tempertureModule;

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#cityTemp').click(function() {
    var city = $('#location-temp').val();
    $('#location-temp').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var unit = $('#temp-unit').val();
      var tempConversion;
      var tempIn = new Temperature(response.main.temp);
      switch(unit) {
        case "Celsius":
          tempConversion = tempIn.celsius;
          break;
        default:
          tempConversion = tempIn.fahrenheit;
      }
      $('.showTemperature').text("The temperature in " + city + " is " + tempConversion);
    }).fail(function(error) {
    $('.showTemp').text(error.responseJSON.message);
    });
  });
});
