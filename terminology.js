/*
General Terminology: 
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
