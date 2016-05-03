//app.js
//var app = angular.module('App', ['ui.router','ui.bootstrap']);

var myApp = angular.module('myApp', ['myApp.services', 'myApp.controllersGeneral', 'myApp.controllersSnippets', 'ngRoute', 'ngSanitize', 'ngAnimate'])
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


		$routeProvider.when('/snippets', // Show ALL snippets
			{
				templateUrl: 'partials/snippets.html',
				controller: 'snipAllCtrl'
			});


		$routeProvider.when('/snippet-category/:id', // Show list of Snippets for category
			{
				templateUrl: 'partials/snippet-cat-list.html',
				controller: 'snipCategoryCtrl'
			});


		$routeProvider.when('/snippets/:id', // Show a specific snippet
			{
				templateUrl: 'partials/snippet-single.html',
				controller: 'snipSingleCtrl'
			});


		$routeProvider.when('/snippet-create', // Show empty form ready to create a new snippet
			{
				templateUrl: 'partials/snippet-create.html',
				controller: 'snipSingleCtrl'
			});


		$routeProvider.when('/snippets/edit/:id', // Edit a snippet
			{
				templateUrl: 'partials/snippet-edit.html',
				controller: 'snipUpdateCtrl'
			});





		/*
		|-----------------------------------------------------------------------------------------------------------------
		| DEFAULT & LOGIN Routes when no matches from above
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$routeProvider.when('/login', // Show login form
			{
				templateUrl: 'partials/login.html',
				controller: 'LoginCtrl'
			});

		//If none of the above routes exist - redirect to /login (default)
		$routeProvider.otherwise(
			{
				redirectTo: '/login'
			});





	}]);

	