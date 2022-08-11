/* 
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
