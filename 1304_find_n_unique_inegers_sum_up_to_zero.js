// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let halfLength = Math.floor(n/2); // 5 => 2, 4 => 2
     
    // make the left side of the array from 2 to inf
    let left = new Array(halfLength).fill(0);
    for (let i = 0; i<left.length; i++) {
        left[i] = i + 1;
    }

    // make a copy with all values negative
    let right = left.slice();
    for (let j = 0; j<right.length; j++) {
        right[j] *= -1;
    }

    if (n % 2 == 0) {
        return left.concat(right);
    }
    else {
        return left.concat([0], right);
    }
};

