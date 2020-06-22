/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let output = [];
    for (let i=0; i<A.length; i++) {
        output.push(A[i] * A[i]);
    }
    
    output.sort((a, b) => a - b);
    return output;
};
