/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix[0].length - 1; i++) {
        var diagonal = matrix[0][i];
        
        var row = 1;
        var col = i+1;
        
        while (row < matrix.length && col < matrix[0].length) {
            if (matrix[row][col] !== diagonal) {
                return false;
            }
            row++;
            col++;
        }
    }
    
    for (let i = 1; i < matrix.length - 1; i++) {
        var diagonal = matrix[i][0];
        
        var row = i+1;
        var col = 1;
        
        while (row < matrix.length && col < matrix[0].length) {
            if (matrix[row][col] !== diagonal) {
                return false;
            }
            row++;
            col++;
        }
    }
    
    return true;
};