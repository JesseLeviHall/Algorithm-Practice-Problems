/* 
Binary Search...
Divide and conquer means dividing a data set into smaller chungks and then repeating a process with asubset of data. this pattern can temendously decrease time complexity. 

ex: search for the index of an integer in a sorted array.

*/

/*
Given a soted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1
*/

//Niave Solution: linear search O(N)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i === val]) {
      return i;
    }
  }
  return -1;
}

//Refactor Solution: Log(N) - Binary Search
function search(arr, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle - 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
