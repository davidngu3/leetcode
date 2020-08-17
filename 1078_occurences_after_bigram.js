/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let occurences = [];
    let sentence = text.split(" ");
    
    for (let i = 0; i < sentence.length - 2; i++) {
        if (sentence[i] == first) {
            if (sentence[i+1] == second) {
                occurences.push(sentence[i+2]);
            }
        }
    }
    
    return occurences;
};