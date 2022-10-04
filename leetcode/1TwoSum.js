/* var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (map.has(difference)) {
      return [map.get(difference), i];
    }

    map.set(nums[i], i);
  }
};
*/

const array1 = [2, 7, 11, 15];
const target1 = 9;

const twoSum = (nums, target) => {
  //store the output array
  let output = [];

  //loop over numbers input array
  for (let i = 0; i < nums.length; i++) {
    //set the current value of i to a variable
    const leftNum = nums[i];
    //set the compliment value to a variable and its index
    const rightNum = target - leftNum;
    console.log(rightNum);
    const rightNumIndex = nums.lastIndexOf(rightNum);
    console.log(rightNumIndex);
    //if a compliment number was found (index > -1) and it appears after leftNum, we have found the answer and return the output array.
    if (rightNumIndex > i) {
      return (output = [i, rightNumIndex]);
    }
  }
  return output;
};

console.log(twoSum(array1, target1));
