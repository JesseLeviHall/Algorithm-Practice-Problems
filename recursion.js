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
