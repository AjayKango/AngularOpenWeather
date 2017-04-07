/**
 * Weather controller is responsible for fetching data from service and providing it to view for rendering.
 */
app.controller('WeatherController', function(weatherService) {
  var vm = this;
  // Service call to get data.
  weatherService.getWeatherDetails().then(function(response){
   vm.data = response;
  })
});