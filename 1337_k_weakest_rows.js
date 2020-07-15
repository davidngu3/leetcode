/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let soldiers = [];
    
    // populate soldiers with [index, strength] pairs from the matrix
    for (let m=0; m<mat.length; m++) {
        let strength = 0;
        for (let n=0; n<mat[0].length; n++) {
            if (mat[m][n]) strength++;
        }
        soldiers.push([m, strength]);
    }
    
    // sort on strength, then index
    soldiers.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    
    // return an array of the first k indices 
    return soldiers.slice(0, k).map(item => item[0]);
};