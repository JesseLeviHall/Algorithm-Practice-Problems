/* function greet(
  firstName,
  lastName,
  { salutation = "Hello", suffix = "Mr" } = {}
) {
  console.log(`${salutation} ${firstName} ${lastName} ${suffix}`);
} */

//the default value for the options object is an empty object. this is so that if the options object is not passed in, the function will not throw an error.

//there is no default order of operations for null coalescing. You must use perenthesis to group the operations.

/* 
OPtional chaining is a feature that allows you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. ex. const name = user?.profile?.name;
*/

/* Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type and the order is how they're entered. Objects dont have an order. ex. let map = new Map(); map.set('1', 'str1'); A good usecase is for a bunch of user settings */

/* Set is a special type collection – “set of values” (without keys), where each value may occur only once. ex. let set = new Set(); let john = { name: "John" }; let pete = { name: "Pete" }; let mary = { name: "Mary" }; // visits, some users come multiple times set.add(john); set.add(pete); set.add(mary); set.add(john); set.add(mary); // set keeps only unique values for(let user of set) { alert(user.name); // John (then Pete and Mary) } */

/* const map = new Map([
  [{ a: 1 }, "USD"],
  [{ b: 2 }, "EUR"],
  [false, "Rupee"],
]);

map.forEach((value, key) => {
  console.log(key, value);
}); */

//methods on maps:
//console.log(map.get());
//mao.set();
//map.delete();
//map.clear();
//map.size;
//map.has();
/* 
const items = [
  {
    id: 1,
    name: "Test",
    description: "Description",
  },
  {
    id: 2,
    name: "Test",
    description: "Description2",
  },
  {
    id: 3,
    name: "Test",
    description: "Description3",
  },
];

function getItems(id) {
  return items.find((item) => item.id === id);
}

console.log(getItems(2));

const itemMap = new Map([
  [1, { id: 1, name: "Test", description: "Description" }],
  [2, { id: 2, name: "Test", description: "Description2" }],
  [3, { id: 3, name: "Test", description: "Description3" }],
]);

function getItemsMap(id) {
  return itemMap.get(id);
}

console.log(getItemsMap(2)); */

//WeakMap is a special kind of Map that does not prevent JavaScript from removing its items from memory. WeakMap has only the following methods: get, set, delete, has. WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

/* const set = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]);
/* console.log(set.size);
console.log(set.has(8));
set.forEach((value) => console.log(value)); */

/* function removeDups(array) {
  return [...new Set(array)];
}

console.log(
  removeDups([
    1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 6, 67, 67, 56, 5, 5, 4, 4, 4, 4, 5, 6,
  ])
);
  */

//const sym = Symbol("name");
//a symbol is always unique forever.  Allows you to create a private variable on an object that wont clash with other properties on the object and will be mostly invisible to the outside world. accessible by getOwnPropertySymbols() and Object.getOwnPropertySymbols(). symbol.for() will return the same symbol if it already exists. symbol.keyFor() will return the name of the symbol.

//a generator function is a function that can be paused and resumed. It is denoted by the * after the function keyword. A generator function returns a generator object. A generator object is an iterator. A generator object has a next() method that returns an object with a value and done property. The value property is the value of the yield expression. The done property is a boolean that is true when the generator function has finished. A generator function can be paused and resumed with the yield keyword. The yield keyword can be used to return a value from the generator function. The yield keyword can also be used to pause the generator function. The yield keyword can be used to pass a value into the generator function. The yield keyword can be used to pause the generator function and pass a value into the generator function.

//object getters and setters : getter cannot take any arguments. setter can take one argument. getters and setters are used to control access to an object. getters and setters are used to validate data. getters and setters are used to perform an action on a property when it is read or written.
/* const user = {
  _username: "test",
  firstName: "John",
  lastName: "Doe",
  get username() {
    return this._username;
  },
  set username(value) {
    if (value.length > 3) {
      this._username = value;
    } else {
      console.log("error");
    }
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

user.fullName = "John Doe";
console.log(user);

const person = {
  age: 25,
  get yearOfBirth() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  },
};
console.log(person.yearOfBirth); */

//binding allows you to change the value of this. bind() can be used to bind a function to a specific object and set the value of this and pass in arguments and set the value of this.
/* 
function sum(a, b) {
  return a + b;
}

function sumTwo(a, b) {
  return sum.bind(null, 2);
} */

//call() and apply() can be used to call a function and set the value of this. call() and apply() can be used to pass in arguments and set the value of this.

/* const person = {
  name: "John Doe",
};

function sayName() {
  console.log(this.name);
}
sayName.apply(person);

sayName.call(person); */

/* const numbersToAdd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(...numbers) {
  return numbers.reduce((count, number) => count + number);
}

console.log(sum.apply(null, numbersToAdd));
console.log(sum.apply(null, [1, 2]));
console.log(sum.call(null, 1, 2));
console.log(sum(...numbersToAdd));
 */

// currying is used to create a new function from an existing function with some preset arguments and the ability to pass in additional arguments and set the value of this.

//***********************OBJECT ORIENTED***********
//object oriented programming is geared towards taking concepts and functionality that is related to a single or model and putting it all together in a class or classes.  Then have a bunch of different classes that can interact with eachother.

// PROTOTYPES
/* function Person(name, age) {
  this.name = name;
  this.age = age;
} */

//add a funciton to the prototype of the Person object:
/* Person.prototype.sayName = function () {
  console.log(this.name);
};

Person.printHi = function () {
  console.log("hi");
};

const person = new Person("John", 25);
console.log(person);
person.sayName();
console.log(Object.getPrototypeOf(person));
Person.printHi(); */

//inheritance is when an object is based on another object. The child object inherits properties and methods from the parent object. The child object can override properties and methods from the parent object. The child object can add new properties and methods. The child object can call methods from the parent object.

/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static printHi() {
    console.log("hi");
  }
  static goodName = "Mr. John";
  sayName() {
    console.log(this.goodName);
  }
}

const person = new Person("John", 25);
console.log(Person.printHi()); */

//the static keyword is new, they are only available on the class itself, not on the instances of the class. static methods are used to create utility functions for a class. static properties are used to define class level properties.

//A static value is something that you must call directly on the class. Something like Promise.resolve, or Math.random.

// prototype constructor:
/* function createUser(email, password, language) {
  this.email = email;
  this.password = password;
  this.language = language;
}

createUser.prototype.printPassword = function () {
  console.log(this.password);
};
const user = new createUser("test@test.com, test, en");
console.log(user); */

//class constructor:
/* class User {
  constructor(email, password, language) {
    this.email = email;
    this.password = password;
    this.language = language;
  }
  get name() {
    return this.email.split("@")[0];
  }
  set name(value) {
    const [, suffix] = this.email.split("@");
    this.email = value + "@" + suffix;
  }

  printPassword() {
    console.log(this.password);
  }
}
const user = new User("test@test.com", "test", " en");
user.name = "Jesse";
console.log(user); */
/* 
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, owner) {
    super(name);
    //super() is used to call the constructor of the parent class.
    this.owner = owner;
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  //if you don't have a constructor, the extended constructor is used.
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const dog = new Dog("Rex");
dog.speak();

 */
/* 
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Janitor extends Person {
  constructor(name, numberOfMops) {
    super(name);
    this.numberOfMops = numberOfMops;
  }

  _cleaningPoductCount = 0;

  set cleaningPoductCount(value) {
    if (value <= 1) {
      throw new Error("Negative cleaning products");
    }
    this._cleaningPoductCount = value;
  }

  clean() {
    this.#helperFunction();
    console.log(
      `The Janitor Cleaned with ${this.numberOfMops} mops and ${this._cleaningPoductCount} cleaning products`
    );
  }
  #helperFunction() {
    console.log("helper function");
  }
}

const janitor = new Janitor("Joey", 2);
janitor.clean(); */

//In a class the private variables are defined with the # symbol. Private variables are only available inside the class. Private variables are not available in the instances of the class. Private variables are not available in the child classes either.  Typically, _ is used to signify private variables also.

//***********************FUNCTIONAL PROGRAMING*******
//functional programming is geared toward making the least amount of changes and mutations possible either by using immutable data structures or by using pure functions.

//A pure function does not mutate data, it does not have side effects, and it always returns the same output given the same input.

const array = [1, 2, 3, 4, 5];
const TAXES = 1.2;
//this is a pure function:
function addElement(array, element) {
  return [...array, element, TAXES];
}
console.log(addElement(array, 6));
