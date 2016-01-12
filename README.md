# math-tools.js
=======
MathTools - is a javascript/node.js module providing some advanced mathematics functionalities.

## Installation

```
npm install math-tools
```
For the browser, you can install with [bower](http://bower.io/):

```
bower install math-tools
```

### Importing

**nodejs**
```javascript
var mathTools = require('math-tools');
```

**browser**
```html
<script src="math-tools.js"></script>
```

## API Documentation

A standard import of `var mathTools = require('math-tools')` is assumed in all of the code examples. The import results in an object having the following public properties:

* `isNumber`       	 	- a function that checks if the given value is a number.
* `isArray`         	- a function that checks if the given value is an array.
* `isObject`        	- a function that checks if the given value is an object.
* `isInteger`       	- a function that checks if the given number is an integer.
* `isPrime`   			- determine whether a number n is prime.
* `sum`        			- determine the sum of a set of numbers.
* `subtraction`    		- subtracts elements from one another in array.
* `product`        		- determine the product of a set of numbers.
* `avg` 				- calculate the average value of a set of numbers in array.
* `factorial`       	- determine the factorial (n!) of a number n.
* `fibonacci` 			- a function that generates the fibonacci numbers up to a number n.
* `gcd`      			- determine the greastest common divisor amongst two integers.
* `lcm`    				- determine the least common multiple amongst two integers.
* `standardDeviation`   - determine the standard deviation for a set of values.
* `adaptiveSimpsonQuadrature`    - calculate integral of a function from a to b using adaptive simpson quadrature.
* `trapezoidal`					 - calculate integral of a function from a to b using trapezoidal rule.

**Examples**

- **isPrime:** Determine whether a number **n** is prime.

  ```JavaScript
  console.log(mathTools.isPrime(16)); // false
  console.log(mathTools.isPrime(17)); // true
  ```

- **sum:** Determine the sum of a set of numbers.
         
  ```JavaScript
  var s1 = mathTools.sum([1,2,3]);
  var s2 = mathTools.sum([{a: 1},{b: 2},{a: 3}], 'a');
  console.log(s1); // 6
  console.log(s2); // 4
  ```

- **subtraction:** Subtracts elements from one another in array.
         
  ```JavaScript
  var s1 = mathTools.subtraction([1,2,3]);
  var s2 = mathTools.subtraction([{a: 1},{b: 2},{a: 3}], 'a');
  console.log(s1); // -4
  console.log(s2); // -2
  ```
  
- **product:** Determine the product of a set of numbers.
  
  ```JavaScript
  var p1 = mathTools.product([1,2,3]);
  var p2 = mathTools.product([{a: 1},{b: 2},{a: 3}], 'a');
  console.log(p1); // 6
  console.log(p2); // 3
  ```

- **avg:** Calculate the average value of a set of numbers in array.
  
  ```JavaScript
  console.log(mathTools.avg([1,2,3,4,5])); // 3
  ```  
  
- **factorial:** Determine the factorial (_n!_) of a number **n**.

  ```JavaScript
  console.log(mathTools.factorial(5)); // 120
  ```

- **fibonacci:** Generates **n** fibonacci numbers.
  
  ```JavaScript
  console.log(mathTools.fibonacci(5)); // [0, 1, 1, 2, 3]
  console.log(mathTools.fibonacci(12)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  ```  
  
- **gcd:** Calculate the greastest common divisor amongst two integers.
  
  ```JavaScript
  console.log(mathTools.gcd(6,9)); // 3
  ```

- **lcm:** Calculate the least common multiple amongst two integers.
 
  ```JavaScript
  console.log(mathTools.gcd([6,9])); // 18
  ```

- **standardDeviation:** Determine the standard deviation for a set of values.
  
  ```JavaScript
  console.log(mathTools.standardDeviation([2,3,4,5])); // 1.118033988749895
  ```

- **adaptiveSimpson:** Calculate integral of a function from a to b using adaptive simpson quadrature.
 
  ```JavaScript
	
	var myFunc = function(x) {
		return 2 * x + 1;
	};
	
  	console.log(adaptiveQuadrature(myFunc, 1, 2)); // 4
  ```  
  
- **trapezoidal:** Calculate integral of a function from a to b using Trapezoidal rule with n subintervals. By default, the value of subintervals is 200.
 
  ```JavaScript
	
	var myFunc = function(x) {
		return 2 * x + 1;
	};
	
	console.log(trapezoidRule(myFunc, 1, 2, 200)); // 4
  ```  
  
  
  
  
