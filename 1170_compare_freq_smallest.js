/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    return queries.map(q => {
        var count = 0;
        for (let i = 0; i < words.length; ++i) {
            if (getFrequency(q) < getFrequency(words[i])) {
                count++;
            }
        }
        return count;
    })
};

var getFrequency = function(word) {
    // alternate function...more concise but slower
//     var charCodes = word.split('').map(e => e.charCodeAt(0));
//     var targetChar = Math.min(...charCodes);
//     return charCodes.filter(e => e == targetChar).length;
    var smallest = 0;
    
    for (let i = 1; i < word.length; ++i) {
        if (word.charCodeAt(i) < word.charCodeAt(smallest)) {
            smallest = i;
        }
    }
    
    var ret = 0;
    var smallestChar = word[smallest];
    for (let i = 0; i < word.length; ++i) {
        if (word[i] == smallestChar) {
            ret++;
        }
    }
    return ret;
}