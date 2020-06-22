/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let luckyH = [];
    let luckyV = [];

    // find lucky row numbers
    for (let row=0; row < matrix.length; row++) {
        luckyH.push(Math.min(...matrix[row]));
    }


    // find lucky column numbers
    for (let col=0; col < matrix[0].length; col++) {
        let max = matrix[0][col];
        for (let i=1; i<matrix.length; i++) {
            let current = matrix[i][col];
            if (current > max) {
                max = current;
            }
        }
        luckyV.push(max);
    }
    
    // find numbers in both lucky row and column
    let output = [];

    for (let i=0; i<luckyH.length; i++) {
        if (luckyV.includes(luckyH[i])) {
            output.push(luckyH[i]);
        }
    }

    return output;
};