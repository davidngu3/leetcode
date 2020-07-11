// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var evens = [];
    var odds = [];

    // sort the input into 2 arrays of evens and odds
    for (let i=0; i<A.length; i++) {
        if (A[i] % 2 == 0) {
            evens.push(A[i]);
        }
        else {
            odds.push(A[i]);
        }
    }

    // interlace the odd and even entries to the output
    let ans = [];
    for (let j=0; j<evens.length; j++) {
        ans.push(evens[j], odds[j]);
    }

    return ans;
};