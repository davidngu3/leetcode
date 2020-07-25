/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function(words, chars) {
    let filtered = words.filter(word => {
        let charsCopy = chars.slice();
        
        for (var letter of word) {
            if (charsCopy.indexOf(letter) == -1) { // letter not in chars
                return false;    
            }
            charsCopy = charsCopy.replace(letter, ''); // replace letter in chars as to avoid duplicates
        }

        return true;
    });
    
    return filtered.reduce((acc, cur) => acc + cur.length, 0);

};

