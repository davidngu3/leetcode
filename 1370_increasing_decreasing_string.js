// Given a string s. You should re-order the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
// Return the result string after sorting s with this algorithm.

// Example 1:
// Input: s = "aaaabbbbcccc"
// Output: "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let output = "";

    // initial min extraction
    let smallest = removeSmallest(s, "a".charCodeAt(0) - 1);
    output += s[smallest];
    s = s.split('');
    s.splice(smallest, 1);
    s = s.join('');

    // keep extracting until no more can be found, will return null
    while (smallest != null) {
        smallest = removeSmallest(s, s.charCodeAt(smallest));
        if (smallest != null) {
            output += s[smallest];
            s = s.split('');
            s.splice(smallest, 1);
            s = s.join('');
        }
    }

    // initial max extraction
    let largest = removeLargest(s, "z".charCodeAt(0) + 1);
    output += s[largest];
    s = s.split('');
    s.splice(largest, 1);
    s = s.join('');
    console.log(s);
    console.log(output);

    while (largest != null) {
        largest = removeLargest(s, s.charCodeAt(largest));
        if (largest != null) {
            output += s[largest];
            s = s.split('');
            s.splice(largest, 1);
            s = s.join('');
        }
    }

    console.log(s);

};

function removeSmallest(s, minCharCode) { // remove smallest character from s AND greater then last appended char
    // step 1 find any value greater than the current mincharcode
    let min = null;
    for (let i=0; i<s.length; i++) {
        if (s.charCodeAt(i) > minCharCode) {
            min = i;
        }
    }

    // return null if there is no such character; this means we have already found the last valid increasing character
    if (min == null) { 
        return null
    }
    
    // step 2 keep extracting the min element which still maintains a greater charcode than the min
    for (let i=0; i<s.length; i++) {
        if ((s.charCodeAt(i) < s.charCodeAt(min)) && (s.charCodeAt(i) > minCharCode)) {
            min = i;
        }
    }
    return min;
};

function removeLargest(s, maxCharCode) {
    // step 1 find any value lesser than the current mincharcode
    let max = null;
    for (let i=0; i<s.length; i++) {
        if (s.charCodeAt(i) < maxCharCode) {
            max = i;
        }
    }

    // return null if there is no such character; this means we have already found the last valid increasing character
    if (max == null) { 
        return null
    }
    
    // step 2 keep extracting the max element which still maintains a greater charcode than the min
    for (let i=0; i<s.length; i++) {
        if ((s.charCodeAt(i) > s.charCodeAt(max)) && (s.charCodeAt(i) < maxCharCode)) {
            max = i;
        }
    }
    return max;
};

sortString("aaaabbbbcccc");