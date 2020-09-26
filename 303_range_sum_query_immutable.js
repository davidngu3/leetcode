/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var sum = nums[0];
    var sums = [nums[0]];
    for (let i = 1; i < nums.length; ++i) {
        sum = sum + nums[i];
        sums.push(sum);
    }
    
    this.sums = sums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i == 0) {
        return this.sums[j];
    }
    else {
        return this.sums[j] - this.sums[i-1];
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */