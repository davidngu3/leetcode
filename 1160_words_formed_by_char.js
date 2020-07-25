/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let total = 0;
    
    for (let i = 0; i < words.length; ++i) {
        let goodWord = true;
        
        let charsCopy = chars.slice();
        for (let j = 0; j< words[i].length; ++j) {
            if (charsCopy.indexOf(words[i][j]) == -1) {
                goodWord = false;    
            }
            charsCopy = charsCopy.replace(words[i][j], '');
        }
        
        if (goodWord) {
            total += words[i].length;
        }
    }
    
    return total;
};

countCharacters(["cat","bt","hat","tree"]
, "atach");