// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Constraints:
// 1 <= n <= 10^5

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var numString = n.toString().split("");

    var product = 1;
    var sum = 0;

    for (let i=0; i < numString.length; i++) {
        product *= parseInt(numString[i]);
        sum += parseInt(numString[i]);
    }

    return product - sum;
};

