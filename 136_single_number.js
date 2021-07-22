/* *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var sorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i += 2) {
        if (sorted[i] !== sorted[i + 1]) {
            return sorted[i];
        }
    }
};

