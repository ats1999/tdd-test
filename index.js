function removeDelimiter(str) {
  return str.substring(4, str.length);
}

function getDelimiter(str) {
  return str[2];
}

function hasDelimiter(str) {
  return str.indexOf("//") === 0;
}

/**
 * Get a list of numbers and return their sum.
 * @param {String} nums string of number
 * @returns {Number} sum of numbers present in nums
 */
function add(nums) {
  let delimiter = ",";

  // if input string has removeDelimiter, then remove it
  if (hasDelimiter(nums)) {
    delimiter = getDelimiter(nums);
    nums = removeDelimiter(nums);
  }

  let negativeNumbers = [];

  let sum = nums.split(delimiter).reduce((total, num) => {
    return (
      total +
      num.split("\n").reduce((total, num) => {
        num = Number(num);

        // store negative number
        if (num < 0) negativeNumbers.push(num);

        return total + num;
      }, 0)
    );
  }, 0);

  if (negativeNumbers.length)
    throw `
Negative numbers are not allowed, found ${negativeNumbers.join(",")}
`;
  return sum;
}

module.exports = add;
