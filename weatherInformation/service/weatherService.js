/**
 * Weather service is responsible for making the REST call to get data from server.
 */
app.service('weatherService', function($http) {
	//TODO: Update the URL to accept the place parameter from user.
	var URL ='http://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&APPID=679e1fb8c87ed1e8d5551d71a91167db&q=PUNE,IN&lang=en_us&units=metric'
	var request = {
    method: 'GET',
    url: URL,
	};
	/**
	*REST call to get the weather details for 5 days.
	*@return: JSON object containing weather details for 5 days.
	*TODO: Error handling mechanism incase data is not available.	
	*/
    this.getWeatherDetails = function () {
	return $http(request).then(function(response) {
      return response.data;
    });
    }
});