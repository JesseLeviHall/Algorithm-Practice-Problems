function greet(
  firstName,
  lastName,
  { salutation = "Hello", suffix = "Mr" } = {}
) {
  console.log(`${salutation} ${firstName} ${lastName} ${suffix}`);
}

//the default value for the options object is an empty object. this is so that if the options object is not passed in, the function will not throw an error.

//there is no default order of operations for null coalescing. You must use perenthesis to group the operations.

/* 
OPtional chaining is a feature that allows you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. ex. const name = user?.profile?.name;
*/

/* Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type. ex. let map = new Map(); map.set('1', 'str1'); map.set(1, 'num1'); map.set(true, 'bool1'); // remember the regular Object? it would convert keys to string map.keys(); // Map Iterator {"1", 1, true} map.values(); // Map Iterator {"str1", "num1", "bool1"} */

/* Set is a special type collection – “set of values” (without keys), where each value may occur only once. ex. let set = new Set(); let john = { name: "John" }; let pete = { name: "Pete" }; let mary = { name: "Mary" }; // visits, some users come multiple times set.add(john); set.add(pete); set.add(mary); set.add(john); set.add(mary); // set keeps only unique values for(let user of set) { alert(user.name); // John (then Pete and Mary) } */
