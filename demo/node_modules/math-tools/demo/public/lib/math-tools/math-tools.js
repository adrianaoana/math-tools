var mathTools = {};

var NUMBER_ERROR = 'Input must be of type Number';
var ARRAY_ERROR = 'Input must be of type Array';
var FUNCTION_ERROR = 'Input must be of type Function';
var INTEGER_ERROR = 'Input must be of type Integer';
var NUMBER_ARRAY_ERROR = 'All elements in array must be numbers or objects with numbers for given property';
var EPSILON = 1e-10;

mathTools.isNumber = function(value) {
	return typeof value === 'number';
};

mathTools.isArray = function(value) {
	return value instanceof Array;
};

mathTools.isObject = function(value) {
	return typeof value === 'object';
};

mathTools.isFunction = function(value) {
	var getType = {};
	return value && getType.toString.call(value) === '[object Function]';
};

mathTools.isInteger = function(value) {
	if (value === Infinity || value === -Infinity) {
		return false;
	} else {
		return value == Math.round(value);
	}
};

var doOperation = function(operator, arr, key) {
	if (mathTools.isArray(arr)) {
		if (!arr[0]) {
			return 0;
		}
		if (mathTools.isNumber(arr[0])) {
			switch (operator) {
			case 'addition':
				var total = 0;
				var i = 0;
				break;
			default:
				var total = arr[0];
				var i = 1;
				break;
			}
			for (i; i < arr.length; i++) {
				if (mathTools.isNumber(arr[i])) {
					switch (operator) {
					case 'addition':
						total += arr[i];
						break;
					case 'subtraction':
						total -= arr[i];
						break;
					case 'multiplication':
						total = total * arr[i];
						break;
					}
				} else {
					throw new Error(NUMBER_ARRAY_ERROR);
				}
			}
		} else if (mathTools.isObject(arr[0])) {
			var key = key || 'value';
			switch (operator) {
			case 'addition':
				var total = 0;
				var i = 0;
				break;
			default:
				var total = 0;
				var i = 0;
				for ( var j = 0; j < arr.length; j++) {
					if (!mathTools.isObject(arr[i])) {
						throw new Error(NUMBER_ARRAY_ERROR);
					}
					if (arr[j].hasOwnProperty(key)) {
						total = arr[j][key];
						i = j+1;
						break;
					}
				}
				break;
			}
			for (i; i < arr.length; i++) {
				if (!mathTools.isObject(arr[i])) {
					throw new Error(NUMBER_ARRAY_ERROR);
				}
				if (arr[i].hasOwnProperty(key)) {
					if (mathTools.isNumber(arr[i][key])) {
						switch (operator) {
						case 'addition':
							total += arr[i][key];
							break;
						case 'subtraction':
							total -= arr[i][key];
							break;
						case 'multiplication':
							total = total * arr[i][key];
							break;
						}
					} else {
						throw new Error(NUMBER_ARRAY_ERROR);
					}
				}
			}
		} else {
			throw new Error(NUMBER_ARRAY_ERROR);
		}
		return total;
	} else {
		throw new Error(ARRAY_ERROR);
	}
};

/**
 * Sum of array
 * 
 * mathTools.sum([1,2,3]) => 6
 * 
 * mathTools.sum([{a: 1},{b: 2},{a: 3}], 'a') => 4
 */
mathTools.sum = function(arr, key) {
	return doOperation('addition', arr, key);
};

/**
 * Subtraction of array
 * 
 * mathTools.subtraction([1,2,3]) => -4
 * 
 * mathTools.subtraction([{a: 1},{b: 2},{a: 3}], 'a') => -2
 */
mathTools.subtraction = function(arr, key) {
	return doOperation('subtraction', arr, key);
};

/**
 * Product of array
 * 
 * mathTools.product([1,2,3]) => 6
 * 
 * mathTools.product([{a: 1},{b: 2},{a: 3}], 'a') => 3
 */
mathTools.product = function(arr, key) {
	return doOperation('multiplication', arr, key);
};

mathTools.factorial = function(n) {
	if (!mathTools.isNumber(n)) {
		throw new Error(NUMBER_ERROR);
	}
	if (n == 0) {
		return 1;
	} else {
		return n * mathTools.factorial(n - 1);
	}
};

mathTools.fibonacci = function(n) {
	if (!mathTools.isNumber(n)) {
		throw new Error(NUMBER_ERROR);
	}
	n = n > 92 ? 92 : n;
	var fib = [];
	if (n > 0) {
		if (n === 1) {
			fib.push(0);
		} else {
			fib = [ 0, 1 ];
			for ( var i = 2; i < n; i++) {
				fib[i] = fib[i - 2] + fib[i - 1];
			}
		}
	}
	return fib;
};

/**
 * Calculate the greastest common divisor amongst two integers.
 */
mathTools.gcd = function(a, b) {
	if (!mathTools.isNumber(a) || !mathTools.isNumber(b)) {
		throw new Error(NUMBER_ERROR);
	}
	var c;
	a = +a;
	b = +b;

	if (a !== a || b !== b) {
		return NaN;
	}

	if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
		return Infinity;
	}

	if ((a % 1 !== 0) || (b % 1 !== 0)) {
		throw new Error("Can only operate on integers");
	}
	while (b) {
		c = a % b;
		a = b;
		b = c;
	}
	return (0 < a) ? a : -a;
};

/**
 * Calculate the least common multiple amongst two integers.
 */
mathTools.lcm = function(a, b) {
	if (!mathTools.isNumber(a) || !mathTools.isNumber(b)) {
		throw new Error(NUMBER_ERROR);
	}
	return Math.abs(a * b) / mathTools.gcd(a, b);
};

/**
 * Determine if number is prime.
 */
mathTools.isPrime = function(n) {
	if (!mathTools.isNumber(n)) {
		throw new Error(NUMBER_ERROR);
	}
	if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
		return false;
	}
	if (n % 2 === 0) {
		return (n === 2);
	}
	if (n % 3 === 0) {
		return (n === 3);
	}
	for ( var i = 5, m = Math.sqrt(n); i <= m; i += 6) {
		if ((n % i === 0) || (n % (i + 2) === 0)) {
			return false;
		}
	}
	return true;
};

/**
 * Average of array
 */
mathTools.avg = function(arr) {
	if (mathTools.isArray(arr)) {
		var length = arr.length;
		return mathTools.sum(arr) / length;
	} else {
		throw new Error(ARRAY_ERROR);
	}
};

/**
 * Find the standard deviation of a set of numbers.
 */
mathTools.standardDeviation = function(arr) {
	var avg = mathTools.avg(arr);
	var length = arr.length;
	var squareSum = 0;
	for ( var i = 0; i < length; i++) {
		squareSum += Math.pow((arr[i] - avg), 2);
	}
	return Math.sqrt(squareSum / length);
};

/**
 * Calculate integral of a function from a to b using adaptive simpson
 * quadrature.
 */
mathTools.adaptiveSimpsonQuadrature = function(func, a, b) {
	if (!mathTools.isFunction(func)) {
		throw new Error(FUNCTION_ERROR);
	}
	if (!mathTools.isInteger(a) || !mathTools.isInteger(b)) {
		throw new Error(INTEGER_ERROR);
	}

	var h = b - a;
	var c = (a + b) / 2.0;
	var d = (a + c) / 2.0;
	var e = (b + c) / 2.0;
	var left = h / 6 * (func(a) + 4 * func(c) + func(b));
	var right = h / 12
			* (func(a) + 4 * func(d) + 2 * func(c) + 4 * func(e) + func(b));
	if (Math.abs(right - left) <= EPSILON) {
		return right + (right - left) / 15;
	} else {
		return mathTools.adaptiveSimpsonQuadrature(a, c)
				+ mathTools.adaptiveSimpsonQuadrature(c, b);
	}
};

/**
 * Calculate integral of a function from a to b using Trapezoidal rule.
 */
mathTools.trapezoidal = function(func, a, b, subintervals) {
	if (!mathTools.isFunction(func)) {
		throw new Error(FUNCTION_ERROR);
	}
	subintervals = subintervals || 200;
	if (!mathTools.isInteger(a) || !mathTools.isInteger(b)
			|| !mathTools.isInteger(subintervals)) {
		throw new Error(INTEGER_ERROR);
	}
	var h = (b - a) / subintervals;
	var sum = 0.5 * h * (func(a) + func(b));
	for ( var k = 1; k < subintervals; k++) {
		sum = sum + h * func(a + h * k);
	}
	return sum;
};

module.exports = mathTools;
