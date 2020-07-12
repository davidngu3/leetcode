// Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.
// Build the target array using the following operations:

// Push: Read a new element from the beginning list, and push it in the array.
// Pop: delete the last element of the array.
// If the target array is already built, stop reading more elements.
// You are guaranteed that the target array is strictly increasing, only containing numbers between 1 to n inclusive.
// Return the operations to build the target array.
// You are guaranteed that the answer is unique.


/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let list = 1;
    let targetPointer = 0;
    let ans = [];
    
    while (targetPointer < target.length) {
        if (list !== target[targetPointer]) {
            ans.push("Push");
            ans.push("Pop");
            list++;
        }
        else {
            ans.push("Push");
            list++;
            targetPointer++;
        }
    }
    
    return ans;
};