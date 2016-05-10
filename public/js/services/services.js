var angular = angular;

var services = angular.module('myApp.services', ['ngResource', 'ngSanitize']);


/*
|-----------------------------------------------------------------------------------------------------------------
| LOGIN
|-----------------------------------------------------------------------------------------------------------------
*/
	
	services.factory('SessionService', function(){
		return {
			get: function(key) {
				//console.log('get');
				return sessionStorage.getItem(key);
			},
			set: function(key, val) {
				//console.log('set');
				return sessionStorage.setItem(key, val);
			},
			unset: function(key) {
				//console.log('unset');
				return sessionStorage.removeItem(key);
			}
		};

	});


	services.factory('FlashService', function($rootScope) {
		return {
			show: function(message) {
				$rootScope.flash = message;
			},
			clear: function() {
				$rootScope.flash = '';
			}
		};
	});
	

	services.factory('AuthenticationService', function($http, SessionService, FlashService) {
			//return $resource('/laravel_dashboard/public/service/authenticate/', {});

			var cacheSession = function() {
				SessionService.set('authenticated', true);
			};

			var uncacheSession = function() {
				SessionService.unset('authenticated');
			};

			var loginError = function(response) {
				FlashService.show(response.flash);
			};


			return {
				login: function(credentials, response) {
					var login = $http.post('/laravel_dashboard/public/api/auth/login', credentials);
					login.success(cacheSession);
					login.success(FlashService.clear);
					login.response = response;
					login.error(loginError);
					return login;
				},
				logout: function() {
					var logout = $http.get('/laravel_dashboard/public/api/auth/logout');
					logout.success(uncacheSession);
					return logout;
				},
				isLoggedIn: function() {
					return SessionService.get('authenticated');
				}
			};
	});

/*
|-----------------------------------------------------------------------------------------------------------------
| FACTORY :: SnippetsFactory
|-----------------------------------------------------------------------------------------------------------------
*/

services.factory('SnippetFactory', function($resource) {
		return $resource('/laravel_dashboard/public/snippets', {}, {
			show: { method: 'GET', isArray: false },
			create: { method: 'POST' }
		});
	});


services.factory('SnippetsFactory', function($resource) {
		return $resource('/laravel_dashboard/public/snippets/:id', {}, {
			show: { method: 'GET', isArray: false },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		});
	});


services.factory('SnippetsCatFactory', function($resource) {
		return $resource('/laravel_dashboard/public/snippet-category/:id', {}, {
			show: { method: 'GET', isArray: false },
		});
	});


services.factory('tabby', function() {
       
		var	footab = function() {
			var tabby_opts = {tabString:'    '},
			textarea = $('textarea');

			textarea.tabby(tabby_opts);
			textarea.height( $(window).height() -400 );
		}

		return footab;
        
    });

