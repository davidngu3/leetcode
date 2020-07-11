// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var ans = new Array(A.length);

    // sort the input into 2 arrays of evens and odds
    let odd = 1;
    let even = 0;

    for (let i=0; i<A.length; i++) {
        if (A[i] % 2 == 0) {
            ans[even] = A[i];
            even+=2;
        }
        else {
            ans[odd] = A[i];
            odd+=2;
        }
    }

    return ans;
};