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
		| ONE FOR ALL SNIPPETS - snipAllCtrl
		| ONE FOR SINGLE SNIPPETS - snipSingleCtrl
		| ONE FOR CATEGORY OF SNIPPETS - snipCategoryCtrl
		| ONE FOR CREATING SNIPPETS - snipCreateCtrl (not needed)
		| ONE FOR EDITING SNIPPETS - snipUpdateCtrl
		| ONE FOR DELETING SNIPPETS - snipDeleteCtrl
		|
		| THIS WILL MAKE THINGS A LITTLE MORE CLEARER ... 
		|-----------------------------------------------------------------------------------------------------------------
		*/


/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: snipAllCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snipAllCtrl', ['$rootScope', '$scope', '$routeParams', 'SnippetFactory',
	function($rootScope, $scope, $routeParams, SnippetFactory) {

		/*
		|-----------------------------------------------------------------------------------------------------------------
		| SHOW (ALL) SNIPPETS
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.snippets = SnippetFactory.show();
		$scope.snippets.$promise.then(function(result) {
			$scope.snippets.name = result.snippets;
			$scope.categories = result.categories;
		});


}]);



/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: snipSingleCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snipSingleCtrl', ['$scope', '$routeParams', 'SnippetsFactory', 'SnippetFactory', 'tabby',
	function($scope, $routeParams, SnippetsFactory, SnippetFactory, tabby) {

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
		| Envoke 'Tabby' - enables tabbed behaviour in textarea
		|-----------------------------------------------------------------------------------------------------------------
		*/
        tabby();

		
}]);



/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: snipCategoryCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snipCategoryCtrl', ['$rootScope', '$scope', '$routeParams', 'SnippetsCatFactory',
	function($rootScope, $scope, $routeParams, SnippetsCatFactory) {

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
| NAME :: snipUpdateCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snipUpdateCtrl', ['$rootScope', '$scope', '$routeParams', 'SnippetsFactory', 'tabby',
	function($rootScope, $scope, $routeParams, SnippetsFactory, tabby) {


		$scope.singleSnippets = SnippetsFactory.show({id: $routeParams.id});
		$scope.singleSnippets.$promise.then(function(result){
			$scope.snippets = result.snippets;
			$scope.categories = result.categories;
		});


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

		
		/*
		|-----------------------------------------------------------------------------------------------------------------
		| Envoke 'Tabby' - enables tabbed behaviour in textarea
		|-----------------------------------------------------------------------------------------------------------------
		*/
        tabby();
       

}]);





/*
|-----------------------------------------------------------------------------------------------------------------
| RUN TIME
| These items will run automatically for each ctrl / page
|-----------------------------------------------------------------------------------------------------------------
*/
app.run(function($rootScope) {

	$rootScope.showCategory = function (obj) {
		$rootScope.theCategory = obj;
		console.log('Category is: ' + obj);
	};

});


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

