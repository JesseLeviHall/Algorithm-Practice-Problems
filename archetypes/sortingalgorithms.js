/*
Elementary sorting:
Good for small sets and nearly sorted data (except insertion)
-bubble sort
  compare consecutive pairs moving larger of the two to the back, largest ends up 'bubbling' to the end. over multiple passes the data gets sorted. swap function for two indxs.
  generally O(n^2). If data is nearly sorted, can be super fast though. O(n)
 
-selection sort
  Similar to bubble sort, but instead of first placing large values in to sorted position, it places small values into sorted position by swaping to the front with the smallest element found in every iteration. Can use same swap logic from bubble sort.  Generally O(n^2) with a nested loop. pretty much the only positive is that it is typically simplest to implement. 

-insertion sort
  gradually builds up a larger left portion wich is always sorted by inserting one element at a time in the correct place. Start with second element and compare to the one before, and swap if necessary. Iterates through the sorted portion to place it. generally O(n^2) with a nested loop unless data is already almost sorted. A good use case is sorting data as it comes in, live...maintaining a sorted set.

JS built in sort method:
almost never does what you want because it sorts by unicode string order. 
takes optional comparator function, (a and b) to determine sort order based on the return value... a negative number means a should come before b, a postive number means a should come after b, and 0 means they are the same as far as the sort is concerned. 
ex: function numberCompare(num1, num2) {
  return num1 - num2;
}

Intermediate Sorting Algorithms:
Good for larger sets (faster sorts) trade off for simplicity. Average O(n log n)

-Merge Sort
  exploits the fact that arrays of 0 or 1 element are always sorted. works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.
  O(N log N) time complexity no matter the data.

-Quick Sort
  also exploits the fact that arrays of 0 or 1 are always sorted. works by selecting one element called the "pivot" and fining the index where the pivot should end up in the sorted array. Once the pivot is postioned appropraitely, quick sort can be applied on either side of the pivot.  Uses a helper function for arranging elements in an array on either isde of a pivot. The helper funcition should designate the pivot element, its refered to as the pivot helper.

-Radix Sort
  All above sorts are comparison sorts. compare 2 elements at a time. Needs to work with base 10 numbers, exploits the fact that the size of a number is encoded in the number of digits.
  groupts numbers together based on value of integer from right to left. Helper function to get integers from each place and also to count number of digits in each number. 
  O(nk) k = number of the digits in the numbers. 
*/
