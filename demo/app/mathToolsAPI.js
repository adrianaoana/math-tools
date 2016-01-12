/**
 * MathToolsAPI
 */
var express = require('express');
var router = express.Router();
var _ = require( 'underscore' );
var math = require('../public/lib/math-tools/math-tools.js');
var func1 = function(x){ return x*x*x + 1 };
var func2 = function(x){ return Math.sin(x)*x };

router.post('/calculateAnswers/?', function(req, res) {
	var numbers = req.body;
	var result = 10;
	
	//question 1
	var value1 = math.product(numbers.product.list);
	if( value1 != numbers.product.answer1) {
		numbers.product.correctAnswer1 = value1;
		result--;
	}
	//question 2
	var value2 = math.factorial(numbers.factorial.nr);
	if( value2 != numbers.factorial.answer) {
		numbers.factorial.correctAnswer = value2;
		result--;
	}
	
	//question 3
	var value3 = math.sum(numbers.sum.objectList,numbers.sum.objectKey);
	if( value3 != numbers.sum.answer) {
		numbers.sum.correctAnswer = value3;
		result--;
	}
	//question 4
	var value4 = math.subtraction(numbers.subtraction.objectList,numbers.subtraction.objectKey);
	if( value4 != numbers.subtraction.answer) {
		numbers.subtraction.correctAnswer = value4;
		result--;
	}
	
	//question 5
	var value5 = math.product(numbers.product.objectList,numbers.product.objectKey);
	if( value5 != numbers.product.answer2) {
		numbers.product.correctAnswer2 = value5;
		result--;
	}
	//question 6
	var value6 = math.gcd(numbers.gcd.a,numbers.gcd.b);
	if( value6 != numbers.gcd.answer) {
		numbers.gcd.correctAnswer = value6;
		result--;
	}
	//question 7
	var value7 = math.lcm(numbers.lcm.a,numbers.lcm.b);
	if( value7 != numbers.lcm.answer) {
		numbers.lcm.correctAnswer = value7;
		result--;
	}
	//question 8
	var value8 = math.standardDeviation(numbers.standardDeviation.list);
	value8 = value8.toFixed(20).match(/^-?\d*\.?0*\d{0,2}/)[0];
	if( value8 != numbers.standardDeviation.answer) {
		numbers.standardDeviation.correctAnswer = value8;
		result--;
	}
	//question 9
	var value9 = math.adaptiveSimpsonQuadrature(func1,numbers.adaptiveSimpsonQuadrature.a,numbers.adaptiveSimpsonQuadrature.b);
	value9 = value9.toFixed(20).match(/^-?\d*\.?0*\d{0,2}/)[0];
	if( value9 != numbers.adaptiveSimpsonQuadrature.answer) {
		numbers.adaptiveSimpsonQuadrature.correctAnswer = value9;
		result--;
	}
	//question 10
	var value10 = math.trapezoidal(func2,numbers.trapezoidal.a,numbers.trapezoidal.b);
	value10 = value10.toFixed(20).match(/^-?\d*\.?0*\d{0,2}/)[0];
	if( value10 != numbers.trapezoidal.answer) {
		numbers.trapezoidal.correctAnswer = value10;
		result--;
	}
	numbers.result = result;
	res.status(200).json(numbers); 
});   	

module.exports = router;
