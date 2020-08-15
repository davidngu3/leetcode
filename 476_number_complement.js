/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = num.toString(2).split('');
    
    return parseInt(bin.map(e => e == 0 ? 1 : 0).join(''), 2);
};