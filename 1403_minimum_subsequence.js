// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 
// If there are multiple solutions, return the subsequence with minimum size and 
// if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. 
// A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 
// Note that the solution with the given constraints is guaranteed to be unique. 
// Also return the answer sorted in non-increasing order.

 
// Example 1:
// Input: nums = [4,3,10,9,8]
// Output: [10,9] 
// Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    let sortedNums = nums.sort((a, b) => b-a);
    let nonIncludedSum = nums.reduce((acc, b) => acc + b, 0);
    let currentTotal = 0;
    
    for (let i=0; i<nums.length; i++) {
        if (currentTotal > nonIncludedSum) {
            return sortedNums.slice(0, i);
        }
        currentTotal += sortedNums[i];
        nonIncludedSum -= sortedNums[i];
    }
    
    // edge cases: whole array is the solution
    return nums
};