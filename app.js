/**
 * Starting point for AngularJS application. This file will contain all the configuration related code for the application.
 */

var app = angular.module('weatherApplication', ['ui.router']); // Initialize the WeatherApplication.
// State configuration for navigation.
app.config(function($stateProvider,$urlRouterProvider){
	//Navigate to the default state if incorrect state is hit.
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state("home",{
		url:'/home',
		templateUrl:"weatherInformation/weatherData.html",
		controller:"WeatherController",
		controllerAs:"vm"
	})
});
