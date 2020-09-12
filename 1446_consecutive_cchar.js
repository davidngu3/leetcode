/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    var currChar = s[0];
    var currConsec = 1;
    var ret = 1;
    
    for (let i = 1; i < s.length; ++i ) {
        if (s[i] !== currChar) {
            currChar = s[i];
            currConsec = 1;
        }    
        else {
            currConsec++;
        }
        if (currConsec > ret) {
            ret = currConsec;
        }
    }
    
    return ret;
};