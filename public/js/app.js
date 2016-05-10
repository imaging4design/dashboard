//app.js
//var app = angular.module('App', ['ui.router','ui.bootstrap']);

var myApp = angular.module('myApp', ['myApp.services', 'myApp.controllersGeneral', 'myApp.controllersSnippets', 'ngtweet', 'ngRoute', 'ngSanitize', 'ngAnimate'])
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



myApp.config(function($httpProvider){
	var logsOutUseron401 = function($location, $q, SessionService, FlashService) {
		var success = function(response){
			return response;
		};
		var error = function(response){
			if(response.status === 401) { //HTTP Not Authorised!
				SessionService.unset('authenticated');
				FlashService.show(response.data.flash);
				$location.path('/login');
				return $q.reject(response);
			} else {
				return $q.reject(response);
			}

		};

		return function(promise){
			return promise.then(success, error);
		};
	};
});



/*
|-----------------------------------------------------------------------------------------------------------------
| ON RUN!
|-----------------------------------------------------------------------------------------------------------------
*/

// Run these functions at load (makes these globally accessible)
myApp.run(function($rootScope, $location, AuthenticationService, FlashService) {

	// Whitelist (the /login page is the only page that does NOT require Auth!) .. all other pages do!
	var routesThatRequireAuth = ['/login'];

	// Requires (underscore-min.js) in index.php!
	$rootScope.$on('$routeChangeStart', function(event, current, previous) {
		if( !_(routesThatRequireAuth).contains($location.path()) && !AuthenticationService.isLoggedIn() ) {
			//console.log('not logged in');
			$location.path('/login');
			FlashService.show('Please login to continue ...');
		}
	});

	$rootScope.logout = function() {
		AuthenticationService.logout().success(function() {
			$location.path('/login');
		});
	};

});

	