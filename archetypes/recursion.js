/* 
- Recursive: a function that calls itself. 
  Needs a condition to stop calling itself or goes forever. 
  Ex: function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
  }

Ex: JSON.parse / JSON.stringify, document.getElementById and DOM traversal algorithms, objext traversal. 

-Any time a a function is invoked it is placed (pushed) on top of the all stack. When javascript sees the return keyword of when the function ends, the compiler will remove (pop)... video 42. 

the two essential parts of a recursive function:
-Base Case = condition when the recursion ends.
-different input = new input everytime it is called 
-a return value, or it will run forever. 

*/

const { ReverseSubtractEquation } = require("three");

//facrotial iteravely:
/*
function factorialLoop(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
let n = factorialLoop(8);
console.log(n);
*/
//factorial recursively:
/*
function factorialRec(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}

let n = factorialRec(8);
console.log(n);
*/

/* 
Recursion helper method: 
compile an array....
funcion outer(input) {
  var outerScpedVariable = []

  function helper(helperInput) {
    //modify the outerScopedVariable
    helper(helperInput--)
  }
  helper(input)
  return outerScopedVariable;
}

*/

//collect all the odd values in an array with helper function
/*
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
let help = [12, 3, 4, 5, 5, 6, 79, 59, 40, 33, 60];
console.log(collectOddValues(help));
*/

//collect odd values pure recursion:
/*
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length == 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
let pure = [12, 3, 4, 5, 5, 6, 79, 59, 40, 33, 60];
console.log(collectOddValues(pure)); */

/* 
in pure recursion functions remember to use array methods that copy the array so you do not mutate the input. 

when using recursion function on a string (immutable) you will need to us methods like slice, subst, or substring to make copies of strings. 

with objects, make copies using Object.assign, or the spread operator. 
*/

//recusive pracitce problems:
/* 
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}
console.log(power(2, 4));
*/

/* 
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1, 2, 3, 10]));
*/

/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(number) {
  if (number === 0) return number;
  return number + recursiveRange(number - 1);
}
console.log(recursiveRange(10));
*/
/* 
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(number) {
 if (number <= 2) return 1;
    return fib(number-1) + fib(number-2);
}
*/

/* 
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverse(string) {
  if (string.length <= 1) return string;
  return reverse(string.slice(1)) + string[0];
}
console.log(reverse("hola"));
*/

/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
console.log(isPalindrome("wooooooow"));
*/

/*
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}
*/

/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
*/

/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
*/

/*
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
} */

/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
} */

/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
} */
/* 

Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

Helper Method Solution:

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}*/

/* 
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

Pure Recursion Solution:

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
} */
