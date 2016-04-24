var angular = angular;

var services = angular.module('myApp.services', ['ngResource', 'ngSanitize']);


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
			update: { method: 'PUT', params: {id: '@id'} }
		});
	});


services.factory('SnippetsCatFactory', function($resource) {
		return $resource('/laravel_dashboard/public/snippet-category/:id', {}, {
			show: { method: 'GET', isArray: false },
		});
	});


services.factory('tabby', function() {
       
		var	foo = function() {
			var tabby_opts = {tabString:'    '},
			textarea = $('textarea');

			textarea.tabby(tabby_opts);
			textarea.height( $(window).height() -400 );
		}

		return foo;
        
    });