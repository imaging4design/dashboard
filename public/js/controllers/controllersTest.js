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
					'View Clients': 'test', 
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

