/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let maxDip = nums[0];
    let acc = nums[0];
    
    for (let i = 1; i<nums.length; i++) {
        acc += nums[i];
        if (acc < maxDip) {
            maxDip = acc;
        }
    }
    
    if (maxDip > 0) {
        return 1;
    }
    return -maxDip + 1;
};