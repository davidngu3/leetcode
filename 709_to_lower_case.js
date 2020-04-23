// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:
// Input: "Hello"
// Output: "hello"

// Example 2:
// Input: "here"
// Output: "here"

// Example 3:
// Input: "LOVELY"
// Output: "lovely"

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.toLowerCase;
};

// Note: The purpose of this challenge was to explore using ASCII methods for faster execution.
// Basically just had to add 32 to the ascii value (obtained using str.charCodeAt(i)) and convert back to string (String.fromCharCode(str))
