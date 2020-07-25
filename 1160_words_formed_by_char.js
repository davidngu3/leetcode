/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let total = 0;
    for (let word of words) {
        var copy = chars.slice();
        
        for (let letter of word) {
            copy = copy.replace(letter, '');
        }
        if (copy.length == chars.length - word.length) {
            total += word.length;
        }
    }
    
    return total;
};

countCharacters(["cat","bt","hat","tree"], "atach");