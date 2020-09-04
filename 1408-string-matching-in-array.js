/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.filter(word => {
        for (let i = 0; i < words.length; i++) {
            if (word !== words[i] && words[i].includes(word)) {
                return true;
            }
        }
        return false;
    })
};