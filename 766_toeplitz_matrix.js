/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i > 0 && j > 0 && matrix[i-1][j-1] != matrix[i][j]) {
                return false;
            }  
        }
    }

    return true;
};