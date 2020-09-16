/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var countMap = new Map();
    var majorityCutoff = Math.floor(nums.length / 2);
    
    for (var i=0; i< nums.length; ++i) {
        if (!countMap.has(nums[i])) {
            countMap.set(nums[i], 1);
        }
        else {
            var curr = countMap.get(nums[i]);
            countMap.set(nums[i], curr+1);
        }
        if (countMap.get(nums[i]) > majorityCutoff) {
            return nums[i];
        } 
    }
    return null;
};