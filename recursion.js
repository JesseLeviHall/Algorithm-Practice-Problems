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
function factorialLoop(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
let n = factorialLoop(8);
console.log(n);

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
console.log(collectOddValues(pure));

/* 
in pure recursion functions remember to use array methods that copy the array so you do not mutate the input. 

when using recursion function on a string (immutable) you will need to us methods like slice, subst, or substring to make copies of strings. 

with objects, make copies using Object.assign, or the spread operator. 
*/

//recusive pracitce problems:

1;

2;
//factorial
