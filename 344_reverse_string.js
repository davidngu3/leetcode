/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let maxIndex = s.length-1;
    for (let i=0; i<=Math.floor(maxIndex/2); ++i) {
        [s[i], s[maxIndex-i]] = [s[maxIndex-i], s[i]];
    }
};