// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    // odd slice pointer
    let j = 1; 

    // cycle through even slice
    for (let i=0; i<A.length; i+=2) { // for each even index
        if (A[i] % 2 !== 0) { // if not even element
            while (A[j] % 2 !== 0) { // find an even element from the odd slice
                j+=2;
            }

            // swap the odd and even element
            [A[i], A[j]] = [A[j], A[i]];
        }
    }

    return A;
};