var angular = angular;

var app = angular.module('myApp.controllersSnippets', []);



		/*
		|-----------------------------------------------------------------------------------------------------------------
		| NOTE TO GAVIN
		|-----------------------------------------------------------------------------------------------------------------
		| EVERY PAGE THAT USES THIS CTRL WILL ENVOKE ALL THESE FUNCTIONS !!!!
		| IT'S A WASTE AND I THINK SOME ARE CONFLICTING WITH EACH OTHER ...
		|
		| BEST SPLIT THE CTRL'S UP INTO THE FOLLOWING:
		| ONE FOR LISTING SNIPPETS - snipShowCtrl
		| ONE FOR CREATING SNIPPETS - snipCreateCtrl
		| ONE FOR EDITING SNIPPETS - snipEditCtrl
		| ONE FOR DELETING SNIPPETS - snipDeleteCtrl
		|
		| THIS WILL MAKE THINGS A LITTLE MORE CLEARER ... 
		|-----------------------------------------------------------------------------------------------------------------
		*/


/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: snipShowCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snipShowCtrl', ['$rootScope', '$scope', '$routeParams', '$location', 'SnippetFactory', 'SnippetsFactory',
	function($rootScope, $scope, $routeParams, $location, SnippetFactory, SnippetsFactory) {



}]);

/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: snippetCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snippetCtrl', ['$rootScope', '$scope', '$routeParams', '$location', 'SnippetFactory', 'SnippetsFactory',
	function($rootScope, $scope, $routeParams, $location, SnippetFactory, SnippetsFactory) {


		


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| SHOW (ALL) SNIPPETS
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.snippets = SnippetFactory.show();
		$scope.snippets.$promise.then(function(result) {
			$scope.snippets = result.snippets;
			$scope.categories = result.categories;
		});


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| SHOW A (SINGLE) SPECIFIC SNIPPET
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.singleSnippets = SnippetsFactory.show({id: $routeParams.id});

		$scope.singleSnippets.$promise.then(function(result){
			$scope.snippets = result.snippets;
			$scope.categories = result.categories;
		});


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| SHOW 'CLICKED ON' CATEGORY
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$rootScope.showCategory = function (obj) {
			$rootScope.theCategory = obj;
			console.log('Category is: ' + obj);
		};


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| CREATES A NEW CATEGORY
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.createNewSnippet = function() {
			$scope.addSnippet = SnippetFactory.create($scope.addSnippet);
			$scope.addSnippet.$promise.then(function(result){
				$scope.addSnippet = result.successMessage;
			});
			console.log($scope.addSnippet.category);
		};


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| EDIT A SNIPPET
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.editSnippet = function(obj, id) {
			$scope.test = obj;
			console.log( 'Editing snippet: ' + obj + ' id: ' + id );
		};


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| UPDATES A SNIPPET
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.updateSnippet = function() {

			$scope.updateSnippet = SnippetsFactory.update($scope.snippets);
			$scope.updateSnippet.$promise.then(function(result){
				$scope.updateSnippet = result.successMessage;
			});

			console.log($scope.snippets);
		};

		// $scope.updateClient = function () {
		// 	ClientFactory.update($scope.client).$promise.then(function() {
		// 		$location.path('/client-list/');
		// 	});
		// };




		/*
		|-----------------------------------------------------------------------------------------------------------------
		| APPLIES 'TABBED' EFFECT FOR TEXTAREA
		|-----------------------------------------------------------------------------------------------------------------
		*/
		(function() {

            var tabby_opts = {tabString:'    '},
            textarea = $('textarea');

            textarea.tabby(tabby_opts);
            textarea.height( $(window).height() -400 );

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
		| SHOW 'CLICKED ON' CATEGORY
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$rootScope.showCategory = function (obj) {
			$rootScope.theCategory = obj;
			console.log('Category is: ' + obj);
		};


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| SHOWS ALL SNIPPETS IN A CATEGORY
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.snippetsPerCategory = SnippetsCatFactory.show({id: $routeParams.id});
		
		$scope.snippetsPerCategory.$promise.then(function(result){
			$scope.snippets = result.snippets;
			$scope.categories = result.categories;
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

