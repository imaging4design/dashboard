//app.js

var myApp = angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {

		/*
		|-----------------------------------------------------------------------------------------------------------------
		| XXXX Routes
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$routeProvider.when('/default', // comment
			{
				templateUrl: 'partials/default.html',
				//controller: 'ClientListCtrl'
			});

		$routeProvider.when('/test', // comment
			{
				templateUrl: 'partials/test.html',
				//controller: 'ClientListCtrl'
			});

		//If none of the above routes exist - redirect to /login (default)
		$routeProvider.otherwise(
			{
				redirectTo: '/default',
			});

	}]);
