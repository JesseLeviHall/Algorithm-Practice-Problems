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

const sym = Symbol("name");
//a symbol is always unique forever.  Allows you to create a private variable on an object that wont clash with other properties on the object and will be mostly invisible to the outside world. accessible by getOwnPropertySymbols() and Object.getOwnPropertySymbols(). symbol.for() will return the same symbol if it already exists. symbol.keyFor() will return the name of the symbol.
console.log(sym);
