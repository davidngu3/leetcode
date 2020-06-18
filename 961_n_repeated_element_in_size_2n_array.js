// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
// Return the element repeated N times.

// Example 1:
// Input: [1,2,3,3]
// Output: 3

/**
 * @param {number[]} A
 * @return {number}
 */

// thought: we can just check with element is repeated once, since only the N repeated element appears more than once
var repeatedNTimes = function(A) {
    let counted = [];
    for (let i=0; i<A.length; i++) {
        if (counted.includes(A[i])) {
            return A[i];
        }
        counted.push(A[i]);
    }
};
