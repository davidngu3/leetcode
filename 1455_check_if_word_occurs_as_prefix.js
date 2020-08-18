/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    var words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (hasPrefix(words[i], searchWord)) {
            return i+1;
        }    
    }
    return -1;
};

var hasPrefix = function(word, prefix) {
    console.log(word + " " + prefix);
    if (word.startsWith(prefix)) {
        return true;
    }
    return false;
}