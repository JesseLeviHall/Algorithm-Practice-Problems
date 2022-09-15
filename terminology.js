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

- predicate: function that returns boolean true or false. often these start with is and runs a check. 

- memoization: Cache the return value of a function. 
  const memoizedValue =  useMemo(() => computeExpensiveValue(a,b), [a,b]); Allows to recompute something without recalculating every value over again. 

- abstraction: dont repeat yourself. 
  Write code to not do things over and over.  

- serializtion: 
  ex: serialize data as a JSON string in order for a javascript app to send data to be understood by a python app. 

- CPS =  continuation passing style
  using the function to pass the data back but still operating synchronously

  function hideString(str, done) {
    done(str.replace(/[a-zA-Z]/g, "X"));
  }

  hideString("hello world", (hidden) => {
    console.log(hidden);
  });

  console.log("end");


  Destructuring means to break down a data structure into its   individual elements. usually an object or array.

  spread and rest operators are useful to clone objects and arrays and modify a property or add a property to an object or array.
  
  null coalescing means to check if a value is null or undefined and if so return a default value.


  polyfill means to write code that adds a feature which the engine may lack. ex. polyfill for fetch api

  facade pattern is a design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes. often used to hide the complexity of a system.

  currying is a technique of evaluating functions with multiple arguments, into a sequence of functions with a single argument.  ex. const add = (a) => (b) => a + b;

  partial application is a technique of fixing a number of arguments to a function, producing another function of smaller arguments. ex. const add = (a, b) => a + b; const add5 = add.bind(null, 5);

  function composition is a technique of combining simple functions to build more complex ones. ex. const add = (a, b) => a + b; const multiply = (a, b) => a * b; const addAndMultiply = (a, b, c) => multiply(add(a, b), c);

  async/await is a way to write asynchronous code that looks synchronous. ex. async function get3Pokemon() { const poke1 = await getPokemon(1); const poke2 = await getPokemon(2); const poke3 = await getPokemon(3); return [poke1, poke2, poke3]; }

  optional chaining is a way to access nested properties without having to check if the parent property exists. ex. const name = user?.profile?.name;

  user.hobbies?.forEach(hobby => console.log(hobby.toUpperCase()));

  polyfill is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively. ex. polyfill for fetch api

  public private and protected are access modifiers. public is the default. private is only accessible within the class. protected is only accessible within the class and subclasses.

  coupling is how closely related two things are. ex. a class and its methods are highly coupled. a class and its data are loosely coupled.

  cohesion is how closely related the responsibilities of a class are. ex. a class that handles user authentication and user profiles is highly cohesive. a class that handles user authentication, user profiles, and user billing is not cohesive.

  gaurd clauses are a way to exit a function early. ex. function doSomething(input) { if (input === null) { return; } // do something with input }

  facade pattern is a design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes. often used to hide the complexity of a system.

  composition vs inheritance is a way to reuse code. composition is when you use objects to compose new functionality. inheritance is when you use classes to inherit functionality from a parent class.


*/
