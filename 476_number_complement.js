/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = num.toString(2);
    let ret = "";
    for (let i = 0; i<bin.length; i++) {
        ret += (bin[i] == '0' ? '1' : '0');
    }
    
    return parseInt(ret, 2);
};