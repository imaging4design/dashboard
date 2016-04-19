//app.js
//var app = angular.module('App', ['ui.router','ui.bootstrap']);

var myApp = angular.module('myApp', ['myApp.services', 'myApp.controllersGeneral', 'myApp.controllersSnippets', 'ngRoute', 'ngSanitize'])
	.config(['$routeProvider', function ($routeProvider) {

		/*
		|-----------------------------------------------------------------------------------------------------------------
		| XXXX Routes
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$routeProvider.when('/default', // The default home page
			{
				templateUrl: 'partials/default.html',
				controller: 'homeCtrl'
			});


		$routeProvider.when('/snippet-category/:id', // Show list of Snippets for category
			{
				templateUrl: 'partials/snippet-cat-list.html',
				controller: 'snippetCatCtrl'
			});


		$routeProvider.when('/snippets/:id', // Show a specific snippet
			{
				templateUrl: 'partials/snippet-single.html',
				controller: 'snippetCtrl'
			});


		$routeProvider.when('/snippet-create', // Show empty form ready to create a new snippet
			{
				templateUrl: 'partials/snippet-create.html',
				controller: 'snippetCtrl'
			});


		$routeProvider.when('/edit/:id', // Show form with raw snippet for editing 
			{
				templateUrl: 'partials/snippet-edit.html',
				controller: 'snippetCtrl'
			});








		//If none of the above routes exist - redirect to /login (default)
		$routeProvider.otherwise(
			{
				redirectTo: '/default',
			});



	}]);

	