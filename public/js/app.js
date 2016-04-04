//app.js
//var app = angular.module('App', ['ui.router','ui.bootstrap']);

var myApp = angular.module('myApp', ['myApp.services', 'myApp.controllersGeneral', 'myApp.controllersSnippets', 'ngRoute', 'ngSanitize'])
	.config(['$routeProvider', function ($routeProvider) {

		/*
		|-----------------------------------------------------------------------------------------------------------------
		| XXXX Routes
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$routeProvider.when('/default', // comment
			{
				templateUrl: 'partials/default.html',
				controller: 'homeCtrl'
			});


		$routeProvider.when('/snippets', // Show list of Snippets
			{
				templateUrl: 'partials/snippet-list.html',
				controller: 'snippetListCtrl'
			});


		$routeProvider.when('/snippet-category/:id', // Show list of Snippets
			{
				templateUrl: 'partials/snippet-single.html',
				controller: 'snippetSingleCtrl'
			});


		$routeProvider.when('/snippets/:id', // Show list of Snippets
			{
				templateUrl: 'partials/snippet-single.html',
				controller: 'snippetSingleCtrl'
			});




		//If none of the above routes exist - redirect to /login (default)
		$routeProvider.otherwise(
			{
				redirectTo: '/default',
			});



	}]);

	
