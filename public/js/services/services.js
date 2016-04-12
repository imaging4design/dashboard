var angular = angular;

var services = angular.module('myApp.services', ['ngResource', 'ngSanitize']);


/*
|-----------------------------------------------------------------------------------------------------------------
| FACTORY :: SnippetsFactory
|-----------------------------------------------------------------------------------------------------------------
*/

services.factory('SnippetFactory', function($resource) {
		return $resource('/laravel_dashboard/public/snippets', {}, {
			get: { method: 'GET', isArray: false },
			create: { method: 'POST' }
		});
	});


services.factory('SnippetsFactory', function($resource) {
		return $resource('/laravel_dashboard/public/snippets/:id', {}, {
			show: { method: 'GET', isArray: false },
			//create: { method: 'POST' }
		});
	});


services.factory('SnippetsCatFactory', function($resource) {
		return $resource('/laravel_dashboard/public/snippet-category/:id', {}, {
			show: { method: 'GET', isArray: true }
		});
	});

