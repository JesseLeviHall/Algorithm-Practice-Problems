/*

Notes from Algo class for flash cards. 

Big O allows us to talk formally about how the runtime of an algorithm grows as the inputs grow. 
O(n) means runtime grown proportionally to n. Rule of thumb a loop. 
O(1) means constant time always same number of calculations no matter what n is
O(n2) means maybe a nested loop, runtime squared by what input is. 

The logarithm of a number (usually log2 as log) roughly measures the number of times you can divide that number by 2 before you get a value thats less than or equal to one. Ex: log(8) = 3
Shows up in search algorithms, sorting, recursion sometimes involves logarithmic space complexity (not time).

Objects are usually fast, but there is no order.
Arrays are slower except accessing data is always o(1) because of the index, so they are for when you need order.  Insert and remove speed depends on order, how many indexes have to be reordered.
searching an array is usually o(n) the more items the longer to search.  Unless it is sorted. 

Sorting is more intensive than just o(n)
Looping is o(n) 
Nested loops are o(n^2)
------------------------------------------------------
1. APPROACHING A PROBLEM:
algorithm: set of steps to accomplish a certain task.
Devise a plan for solving the problem. 5 parts:
- understand it
  restate the problem in my own words
  what are the inputs and outputs / return
  consider: do I have enough information to solve it
  how should I label the important pieces of data
- explore examples
  unit tests, userstories? expected inputs / outputs
  what if there are no inputs?
  what if there are invalid inputs? other edge cases?
- divide and conquer breakdown
  explicitly write out the steps as comments
  or as pseudo code
- solve / simplify in actuality or theory or strategy
  accomplish something, even if not all of it. find the core difficulty and temporarily ignore that, and write a simplified solution, then bring the hard part back if you can.
- look back and refactor / program evaluation
  can you check the result? 
  can you do it differently / improve it?
  can you use this to solve another problem?
  what other approaches have you seen done mr. interviewer?

2. ARCHETYPES OF ALGORITHMS:
Identify the patterns and recipes
- frequency counter
  use an object to collect values and their frequency


----------------------------------------------------------

General Termenology: 
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

- Idempotent: an operation that when applied multiple 
  times will always produce the same result. 
  in terms of api's get put and delete should aways be implemented
  in an idempotent way. and when submitting (post) card transactions
  
- immutable: will not change: Object.freeze(dinner);

- ephemeral: 
  antonym for persistent or immutable.  plain js object is considered ephemeral.  Serveless architecture meaning ephermeral servers that only run when needed ex. aws lamba or vercel

- anonymous functions: arrow function

- predicate: function that returns boolean true or false. often 
  start with is. 

- memoization: Cache the return value of a function. 
  const memoizedValue =  useMemo(() => computeExpensiveValue(a,b), [a,b]); Allows to recompute something without recalculating every value over again. 

- abstraction: dont repeat yourself. 
  Write code to not do things over and over.  

- serializtion: 
  ex: serialize data as a JSON string in order for a javascript app to send data to be understood by a python app. 

*/
