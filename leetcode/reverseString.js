var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let endTemp = s[s.length - 1 - i];
    let begTemp = s[i];

    s[s.length - 1 - i] = begTemp;
    s[i] = endTemp;
  }
  return s;
};

//console.log(reverseString(["h", "e", "l", "l", "o"]));

//recursive version:
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

//reverse array recursive:
function reverseArr(arr) {
  if (arr.length <= 1) return arr;
  return reverseArr(arr.slice(1)) + ", " + arr[0];
}

console.log(reverseArr(["ant", "bison", "camel", "duck", "elephant"]));

//JS methods:
function revString(str) {
  return str.split("").reverse().join("");
}

//vanilla:
function reverString(str) {
  const arrayify = str.split("");
  const reversedArray = [];
  for (let i = arrayify.length - 1; i >= 0; i--) {
    reversedArray.push(arrayify[i]);
  }
  const reversedString = reversedArray.join("");
  return reverseString;
}
