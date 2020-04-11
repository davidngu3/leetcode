// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.
 
// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.


// Constraints:
// 1 <= s.length <= 1000
// s[i] = 'L' or 'R'

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    var output = 0;
    var parity = 0;

    for (char of s) {
        if (char == 'R') {
            parity++;
        }
        else {
            parity--;
        }
        if (parity == 0) {
            output++;
        }
    }

    return output;
};

