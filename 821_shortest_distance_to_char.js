/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var indexArray = S.split('').map((e, i) => e == C ? i : null).filter(e => e == null ? false : true);
    
    return S.split('').map((e, i) => {
        return Math.min(...indexArray.map(d => Math.abs(d - i)));
    });
};

