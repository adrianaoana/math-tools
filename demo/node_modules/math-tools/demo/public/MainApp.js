/**
 * MainAPP
 */
var MainApp = angular.module('MainApp', [ 'ngRoute' ]);

MainApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'MainController',
		templateUrl : 'views/index.html'
	}).otherwise({
		redirectTo : '/'
	});

});

MainApp.controller('MainController', function($scope, MainAPI, $rootScope,
		$filter, $http) {

	var list = [{a: 1},{b: 2}, {a: 3}, {a: 1}, {b: 5}];
	var func1 = function(x){ return x*x*x + 1 };
	var func2 = function(x){ return Math.sin(x)*x };
	$scope.numbers = {
		sum : {
			objectList: list,
			objectKey : 'a'
		},
		subtraction : {
			objectList: list,
			objectKey : 'b'
		},
		product : {
			list : [ 4, 5, 3],
			objectList: list,
			objectKey : 'b'
		},

		factorial : {
			nr : 5
		},
		gcd: {
			a: 4,
			b: 6
		},
		lcm: {
			a: 4,
			b: 6
		},
		standardDeviation: {
			list: [ 12, 8, 9, 14, 12]
		},
		adaptiveSimpsonQuadrature: {
			func: func1,
			a: 1,
			b: 4
		},
		trapezoidal: {
			func: func2,
			a: 1,
			b: 2
		}
	};
	console.log("Hello from the other side ;)");

	$scope.takeTest = function(numbers) {
		MainAPI.calculateAnswers(numbers).then(function(result) {
			$scope.numbers = result;
		});
	};

});
