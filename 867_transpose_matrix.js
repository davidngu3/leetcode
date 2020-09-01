/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var ret = new Array(A[0].length).fill().map(e => new Array(A.length).fill());
    
    for (let r = 0; r < A.length; r++ ) {
        for (let c = 0; c < A[0].length; c++ ) {
            ret[c][r] = A[r][c];
        }
    }
    
    return ret;
}; 