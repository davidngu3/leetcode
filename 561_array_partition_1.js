// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) 
// which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

// Example 1:
// Input: [1,4,3,2]
// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // stores sum (output)
    var pairSum = 0;
    // sort array
    var sorted = nums.sort((a, b) => a - b);
    
    // pair adjacent integers, add to sum
    for (let i = 0; i < sorted.length-1; i+=2) {
        pairSum += sorted[i];
    }

    return pairSum;
};

// reasoning: The maximum value will be yielded when we sum adjacent numbers after sorting the array
// why? the fact that we have to pair every value and take the min means the largest number in nums is redundant; it can not be used in any case
// thus, it is optimal to take the 2nd highest value and pair it with that largest value, since that is the only way it will be used
// now apply the same reasoning to the rest of the array. The 3rd highest value with be paired with the 4th highest value
// in the end we will essentially take every value N=0, 2, 4, 6, 8 which is reflected in the code