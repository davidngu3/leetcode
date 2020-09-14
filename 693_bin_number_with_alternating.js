/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var bin = n.toString(2).split('');
    
    var curr = bin[0];
    
    for (let i = 1; i < bin.length; ++i) {
        if (curr == bin[i]) {
            return false;
        }
        curr = bin[i];
    }
    
    return true;
    
};