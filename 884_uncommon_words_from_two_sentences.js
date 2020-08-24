/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var uniqueA = A.split(" ").filter((e, i, arr) => arr.indexOf(e) == arr.lastIndexOf(e) && B.split(" ").indexOf(e) == -1);
    var uniqueB = B.split(" ").filter((e, i, arr) => arr.indexOf(e) == arr.lastIndexOf(e) && A.split(" ").indexOf(e) == -1);
    
    return uniqueA.concat(uniqueB);
};