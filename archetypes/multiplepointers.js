/* 
creating pointers or values that correspond to an index or position and move towards the beinning, end or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well.

usually we are looking for a pair, by starting at the ends and working towards the middle. 
*/

/* 
Write a funciton called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pai does not exist. 
*/

//Naive Solution: time O(N^2)
function sumZero(arr) {
  for (let i = 0; i < arr.lenth; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//Refactored Solution: O(N)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

/* 
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 
*/

// Solution: O(N)

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
