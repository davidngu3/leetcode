/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var kb = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], 
              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
              ['z','x','c','v','b','n','m']];
    
    return words.filter(word => check(word, kb));
};

// returns true if the word can be typed using 1 row
var check = function(word, kb) {
    let letters = word.split('');
    
    
    for (row of kb) {
        let pass = 0;
        for (letter of letters) {
            if (row.includes(letter.toLowerCase())) {
                pass++;
            }
        }
        
        if (pass == letters.length) {
            return true;
        }
    }
    
    return false;
}