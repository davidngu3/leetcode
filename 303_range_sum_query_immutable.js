/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var sum = 0;
    var sums = [0];
    for (let i = 0; i < nums.length; ++i) {
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
    return this.sums[j+1] - this.sums[i];

};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */