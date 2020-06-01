// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  
// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.
// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

// Example 1:

// Input: "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let answerString = "";
    
    let startPointer = 0; // variables to point to the beginning and end of primitive parentheses strings
    let endPointer = 1;

    var L = 1; // variables to count the number of opening "(" and closing ")" parentheses; string always starts with opening parenthesis
    var R = 0;

    while (endPointer < S.length) { 
        if (S[endPointer] == "(") {
            L++;
        }
        else {
            R++;
        }
        if (L == R && L > 0) { // once left/right parentheses count matches, i.e. primitive parentheses string found
            answerString += S.substring(startPointer + 1, endPointer); // add it to the output string without the outer parentheses
            startPointer = endPointer + 1; // relocate the starting index to the start of the next primitive parentheses string
        }
        endPointer++; 
    }
    return answerString;
};


