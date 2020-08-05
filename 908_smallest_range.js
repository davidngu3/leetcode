/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    let diff = (Math.max(...A) - K) - (Math.min(...A) + K);
    
    return diff < 0 ? 0 : diff;
    
};