var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (map.has(difference)) {
      return [map.get(difference), i];
    }

    map.set(nums[i], i);
  }
};

function twoSum(numbers, target) {
  // store the output array
  let output = [];

  // loop over numbers input array
  for (let i = 0; i < numbers.length; i++) {
    // store current value
    const leftNum = numbers[i];
    // store what the compliment value would be, along with its index
    // we use lastIndexOf in case of duplicates
    const rightNum = target - leftNum;
    const rightNumIndex = numbers.lastIndexOf(rightNum);

    // if a compliment number was found (index > -1) and it appears after leftNum, we have found the answer and return the output array
    if (rightNumIndex > i) {
      return (output = [i, rightNumIndex]);
    }
  }

  return output;
}

//return the index of the two numbers that add up to the target.
array1 = [2, 7, 11, 15];
target1 = 9;

const twoSum = (array, target) => {
  do {
    let leftNumber = array[i];
    let rightNumber = array[array.length - 1];
    if (leftNumber + rightNumber === target) {
      return [leftNumber.indexOf, rightNumber.indexOf];
    }
    i++;
  } while (i < array.length);
};
