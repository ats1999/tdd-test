/**
 * Get a list of numbers and return their sum.
 * @param {String} nums string of number
 * @returns {Number} sum of numbers present in nums
 */
function add(nums) {
  let sum = nums.split(",").reduce((total, num) => total + Number(num), 0);
  return sum;
}

module.exports = add;
