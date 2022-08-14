/*
Elementary sorting:
-bubble sort
  compare consecutive pairs moving larger of the two to the back, largest ends up 'bubbling' to the end. over multiple passes the data gets sorted. swap function for two indxs.
  generally O(n^2). If data is nearly sorted, can be super fast though. O(n)
 
-selection sort
  Similar to bubble sort, but instead of first placing large values in to sorted position, it places small values into sorted position by swaping to the front with the smallest element found in every iteration. Can use same swap logic from bubble sort.  Generally O(n^2) with a nested loop.

-insertion sort

JS built in sort method:
-almost never does what you want because it sorts by unicode string order. 
takes optional comparator function, (a and b) to determine sort order based on the return value... a negative number means a should come before b, a postive number means a should come after b, and 0 means they are the same as far as the sort is concerned. 
ex: function numberCompare(num1, num2) {
  return num1 - num2;
}

*/
