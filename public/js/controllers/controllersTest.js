var angular = angular;

var app = angular.module('myApp.controllersTest', []);

/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: LoginCtrl
| Methods :: Login | Logout
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('testCtrl', ['$scope',
	function($scope) {

		// Menu items
		$scope.divisions = [
			{
				'parent' : 'Hosting',
				'child' : {
					'View Clients': 'tester', 
					'Create Client': 'test'
				}
			},
			{
				'parent' : 'Snippets',
				'child' : {
					'View Snippets': 'test', 
					'Create Snippet': 'test',
					'Category': 'test'
				}
			},
			{
				'parent' : 'Other',
				'child' : {
					'View Snippets': 'test', 
					'Create Snippet': 'test'
				}
			}
		];

}]);


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

