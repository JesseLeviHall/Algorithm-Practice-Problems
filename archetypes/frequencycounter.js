/* 
SAME?
Write a funciton same which accepts two arrays. the function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same. 
*/

//Naive Solution: O(N^2)
function same(arr1, arr2) {
  //check if they are the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  //check if each index has correct value
  for (let i = 0; i <= arr1.length; i++) {
    //what is the index of i squared
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    //if the index of i squared is -1 it isnt in there
    if (correctIndex === -1) {
      return false;
    }
    //remove the squared i from arr2 until empty
    arr2.splice(correctIndex, 1);
  }
  return true;
}

//Refactored Solution: O(N) with frequency counter
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //objects that tell how many times each i occurs
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //loop over arr1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  //loop over arr2
  for (let val of arr1) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  //check if the key value of obj1 squared is in obj2
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    //check if the frequency matches as well
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

/* 
Anagrams: 
Given two strings, write a function to determine if the second string is an anagram of the first. 
*/
function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  const lookUp = {};

  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    //if letter exists, increment, otherwise set to 1
    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  }

  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    //cant find letter or letter is zero then its not an anagram
    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }
  return true;
}

/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true
*/
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
