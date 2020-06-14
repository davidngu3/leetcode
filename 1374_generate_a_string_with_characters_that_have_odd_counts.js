// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

// Example 1:
// Input: n = 4
// Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. 
// Note that there are many other valid strings such as "ohhh" and "love".

/**
 * @param {number} n
 * @return {string}
 */

 // thought process: realistically we only need 2 characters for this to work. 1 character can cover any odd n, and 2 characters can cover and even n
var generateTheString = function(n) {
    let output = "";

    // if odd,
    if (n % 2 !== 0) {
        output = "a".repeat(n); // prints "a" n times
    }
    // if even
    else { // if even
        output = "a".repeat(n-1) + "b"; // prints "a" n-1 times, then b once
    }

    return output;
};

