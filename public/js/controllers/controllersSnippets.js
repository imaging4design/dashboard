var angular = angular;

var app = angular.module('myApp.controllersSnippets', []);


/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: LoginCtrl
| Methods :: Login | Logout
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('LoginCtrl', ['$rootScope', '$scope', '$location', 'AuthenticationService',
	function($rootScope, $scope, $location, AuthenticationService) {


	//$scope.credentials = { username: "", password: "" }

	$scope.login = function() {
		AuthenticationService.login($scope.credentials).success(function() {
			$location.path('/snippets');
		});
	};

	// Customise the background colour for login page only
	$rootScope.loginCSSClass = function() {
		if( $location.path() === '/login' ) {
			return 'login-background';
		} else {
			return '';
		}
	}


	$scope.nextForm = function(direction) {

		if(direction === 'f') {
			$scope.move = true;
		} else {
			$scope.move = false;
		}
		
	}


	
}]);



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
			$scope.numSnippets = result.snippets.length;
		});

		$scope.catIDConvert = function(obj) {
			console.log(obj);
			
			switch(obj) {
			case '1':
				$rootScope.theCategory = 'CSS';
				break;
			case '2':
				$rootScope.theCategory = 'jQuery';
				break;
			case '3':
				$rootScope.theCategory = 'Javascript';
				break;
			case '4':
				$rootScope.theCategory = 'PHP';
				break;
			case '5':
				$rootScope.theCategory = 'HTML';
				break;
			case '6':
				$rootScope.theCategory = 'MISC';
				break;
			default:
				$rootScope.theCategory = 'ALL';
			} 
		}	


}]);



/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: snipSingleCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snipSingleCtrl', ['$scope', '$routeParams', '$location', 'SnippetsFactory', 'SnippetFactory', 'tabby',
	function($scope, $routeParams, $location, SnippetsFactory, SnippetFactory, tabby) {


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
		| CREATES A NEW SNIPPET
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.createNewSnippet = function() {
			$scope.addSnippet = SnippetFactory.create($scope.addSnippet);
			$scope.addSnippet.$promise.then(function(result){
				$scope.addSnippetMessage = result.successMessage;
			});

			$location.path('/snippet-category/' + $scope.addSnippet.category);
			//console.log('What is the category id: ' + $scope.addSnippet.category);
		};


		/*
		|-----------------------------------------------------------------------------------------------------------------
		| DELETE A SNIPPET
		|-----------------------------------------------------------------------------------------------------------------
		*/
		$scope.deleteSnippet = function (snippetID) {
			SnippetsFactory.delete({ id: snippetID }).$promise.then(function(result){
				$location.path('/snippets');
			});
			
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
			$scope.numSnippets = result.snippets.length;
		});
		
}]);



/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: snipUpdateCtrl
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('snipUpdateCtrl', ['$rootScope', '$scope', '$routeParams', '$location', 'SnippetsFactory', 'tabby',
	function($rootScope, $scope, $routeParams, $location, SnippetsFactory, tabby) {


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
				$scope.editSnippetMessage = result.successMessage;
				$location.path('/snippets/' + $routeParams.id);
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

	$rootScope.limit = 10;
		$rootScope.showLimit = function(obj){
		$rootScope.limit = obj;
	}



	$rootScope.$on('$routeChangeStart', function(event, current, previous) {

		// Alternates a CSS class on image
		if( $rootScope.rotate === false ) {
			$rootScope.rotate = true;
		} else {
			$rootScope.rotate = false;
		}
		
	});
	   

});


/*
|-----------------------------------------------------------------------------------------------------------------
| DIRECTIVES
|-----------------------------------------------------------------------------------------------------------------
*/

// Back button directive
app.directive('backButton', function(){
    return {
        restrict: 'A',
            link: function(scope, element, attrs) {
			element.bind('click', function () {
			    history.back();
			    scope.$apply();
			});
	    }
	}
});

// Applies the 'prettyprint' styling 
app.directive('prettyprint', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              setTimeout(prettyPrint, 300);
        }
    };
});


// Animates the top menu bar to smaller on scroll
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


// Enables 'all text' to be selected on focus ..
app.directive('selectOnClick', function ($window) {
    return {
        link: function (scope, element) {
            element.on('click', function () {
                var selection = $window.getSelection();        
                var range = document.createRange();
                range.selectNodeContents(element[0]);
                selection.removeAllRanges();
                selection.addRange(range);
            });
        }
    }
});


// Prevent 'tabbing' key behaviour in login form
app.directive('keyDown', function ($window) {
    return {
        link: function (scope, element) {
            element.on('keydown', function (e) {
                if(e.keyCode==9){
					e.preventDefault();
				}
            });
        }
    }
});
