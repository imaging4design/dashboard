var angular = angular;

var app = angular.module('myApp.controllersSnippets', []);

/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: snippetCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snippetCtrl', ['$rootScope', '$scope', '$routeParams', '$location', 'SnippetFactory', 'SnippetsFactory',
	function($rootScope, $scope, $routeParams, $location, SnippetFactory, SnippetsFactory) {


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| LIST ALL SNIPPETS & SNIPPET CATEGORIES
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$rootScope.allSnippets = SnippetFactory.get();


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| SHOW A SPECIFIC SNIPPET
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.snippets = SnippetsFactory.show({id: $routeParams.id});


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| TRACKS THE CURRENT CATEGORY
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$rootScope.show = {
			category: 'Select a Category ...'
		};


		$rootScope.showCategory = function (obj) {
			console.log(obj);
			$rootScope.show.category = obj;
		};



		/*
		|-----------------------------------------------------------------------------------------------------------------
		| CREATES A NEW CATEGORY
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.createNewSnippet = function () {
			$scope.addSnippet = SnippetFactory.create($scope.snippet);
			$scope.addSnippet.$promise.then(function(result){
				$scope.addSnippet = result.successMessage;
			});
			console.log($scope.snippet);
		};


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| APPLIES 'TABBED' EFFECT FOR TEXTAREA
		|-----------------------------------------------------------------------------------------------------------------
		*/
		(function() {

            var tabby_opts = {tabString:'    '},
            textarea = $('textarea');

            textarea.tabby(tabby_opts);
            textarea.height( $(window).height() -300 );

        })();

		
}]);





/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: snippetCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snippetCatCtrl', ['$rootScope', '$scope', '$routeParams', '$location', 'SnippetsCatFactory',
	function($rootScope, $scope, $routeParams, $location, SnippetsCatFactory) {

		/*
		|-----------------------------------------------------------------------------------------------------------------
		| SHOWS ALL SNIPPETS IN A CATEGORY
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.catSnippets = SnippetsCatFactory.show({id: $routeParams.id});
		$scope.catSnippets.$promise.then(function(result){
			$scope.catSnippets = result;
			$rootScope.snippet = {};
			$rootScope.snippet.category = result[0].snippet_cat.category;
		});


}]);





/*
|-----------------------------------------------------------------------------------------------------------------
| DIRECTIVES
|-----------------------------------------------------------------------------------------------------------------
*/
app.directive('prettyprint', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              setTimeout(prettyPrint, 300);
        }
    };
});



app.directive('menuAnimate', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {

        	var navbarFixedTop = $('.navbar-fixed-top'),
				navbarNavListItems = $('.navbar-nav > li > a'),
				navbarBrand = $('.navbar-brand'),
				navbar = $('.navbar'),
				maximum = 20,
				padSmall = 15,
				padLarge = 25;

			if (this.pageYOffset > 2) {
				navbarFixedTop.css({'position': 'fixed', 'top': 0});
				navbarNavListItems.css({'padding-top': padSmall, 'padding-bottom': padSmall});
				navbarBrand.css({'padding-top': padSmall, 'padding-bottom': padSmall});
				navbar.css({'min-height': 0});

				navbarNavListItems.addClass('translate');
				navbarBrand.addClass('translate');

			} else {
				navbarFixedTop.css({'position': 'absolute', 'top': 0});
				navbarNavListItems.css({'padding-top': padLarge, 'padding-bottom': padLarge});
				navbarBrand.css({'padding-top': padLarge, 'padding-bottom': padLarge});
				navbar.css({'min-height': 50});
			}

            scope.$apply();
        });
    };
});

