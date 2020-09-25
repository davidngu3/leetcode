/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length == 0) {
        return 0;
    } 
    
    var curSum = nums[0];
    var maxSum = curSum;
    
    for (let i = 1; i < nums.length; ++i) {
        var projectedSum = curSum + nums[i]; // our new sum if we take the new number
        if (nums[i] > projectedSum) { // if the new number alone is better than our cumulative sum, then just take new number
            curSum = nums[i];
        }
        else {
            curSum = projectedSum; // otherwise we keep accumulating our current sum
        }
        
        if (curSum > maxSum) {
            maxSum = curSum;  // update our best sum
        }
    }
    
    return maxSum;
};