var angular = angular;

var services = angular.module('myApp.services', ['ngResource', 'ngSanitize']);


/*
|-----------------------------------------------------------------------------------------------------------------
| FACTORY :: SnippetsFactory
|-----------------------------------------------------------------------------------------------------------------
*/

services.factory('SnippetFactory', function($resource) {
		return $resource('/laravel_dashboard/public/snippets', {}, {
			get: { method: 'GET', isArray: false }
		});
	});


services.factory('SnippetsFactory', function($resource) {
		return $resource('/laravel_dashboard/public/snippets/:id', {}, {
			show: { method: 'GET', isArray: false },
			create: { method: 'POST' }
		});
	});






// services.factory('SnippetFactory', function($http) {
// 	return {
// 		// get all 'LIVE' jobs by ALL clients
// 		get: function() {
// 			return $http.get('/laravel_dashboard/public/snippets');
// 		}
// 	};
// });
