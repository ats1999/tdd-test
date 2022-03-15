/**
 * Get a list of numbers and return their sum.
 * @param {String} nums string of number
 * @returns {Number} sum of numbers present in nums
 */
function add(nums) {
  let sum = 0;
  nums.split(",").forEach((num) => {
    sum += Number(num);
  });
  return sum;
}

module.exports = add;
