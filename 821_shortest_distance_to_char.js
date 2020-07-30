/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var indexArray = [];
    
    for (let i=0; i<S.length; i++) {
        if (S[i] == C) {
            indexArray.push(i);
        }
    }
    
    return S.split('').map((e, i) => {
        return Math.min(...indexArray.map(d => Math.abs(d - i)));
    });
};

