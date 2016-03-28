var angular = angular;

var app = angular.module('myApp.controllersTest', []);

/*
|-----------------------------------------------------------------------------------------------------------------
| NAME :: LoginCtrl
| Methods :: Login | Logout
|-----------------------------------------------------------------------------------------------------------------
*/
app.controller('testCtrl', [
	function() {



}]);

app.directive('prettyprint', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              setTimeout(prettyPrint,300);
        }
    };
});