/*
JavaScript has linear search methods built in: indexOf includes find findIndex some
But, Binary search is faster, by eliminating half of the operations. Drawback is it has to be a sorted array. 


Given a soted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1


//Niave Solution: linear search O(N)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i === val]) {
      return i;
    }
  }
  return -1;
}
*/

//Refactor Solution: Log(N) - Binary Search
function search(array, val) {
  if (array.length === 1 && val === array[0]) return 0;
  let min = 0;
  let max = array.length - 1;
  let middle = Math.floor((min + max) / 2);

  while (array[middle] !== val && min <= max) {
    if (val < array[middle]) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
    middle = Math.floor((min + max) / 2);
  }
  return array[middle] === val ? middle : -1;
}
console.log(search([1, 2, 3, 4, 5, 6, 4, 9, 7, 57, 3, 8], 2));
