describe("Unit: Weather Service", function() {
    describe("Weather Data Service:", function() {

        beforeEach(function() {
            angular.module('weatherApplication');
        });

        it('should contain a weatherService',
           inject(function(weatherService) {
                expect(weatherService).not.to.equal(null);
        }));

        it('should contain 5 list items',
            inject(function(weatherService) {
				var numberOfDays = 0;
				 weatherService.getWeatherDetails().then(function(response){
					numberOfDays = response.data.list.length;
				})
                expect(numberOfDays).to.equal(5);
        }));

   });
});