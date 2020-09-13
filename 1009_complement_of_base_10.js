/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    var bin = N.toString(2).split('').map(e => e == '1' ? '0' : '1').join('');
    
   return parseInt(bin, 2);
    
};