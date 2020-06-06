// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:
// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
// Return the string formed after mapping.
// It's guaranteed that a unique mapping will always exist.
 
// Example 1:
// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) { 
    let output = "";
    // get last character
    let i = s.length-1; 
    
    // loop backwards through input, decoding 3 characters if '#' found otherwise decode 1
    while (i>=0) {
        if (s[i] == '#') {
            var code = s[i-2] + s[i-1];
            i -= 2;
        }
        else {
            var code = s[i];
        }
        var decodedChar = String.fromCharCode(96 + parseInt(code));
        output = decodedChar + output;
        i--;
    }

    return output;
};

freqAlphabets("1326#");