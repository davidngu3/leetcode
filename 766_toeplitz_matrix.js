/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    var startRows = [];
    for (let i = 0; i < matrix[0].length - 1; i++) {
        startRows.push([0, i]);
    }
    
    for (let j = 1; j < matrix.length - 1; j++) {
        startRows.push([j, 0]);
    }
    
    for (point of startRows) {
        row = point[0]; col = point[1];
        var plitzVal = matrix[row][col]
        row++; col++;
        
        while (row < matrix.length && col < matrix[0].length) {
            if (matrix[row][col] !== plitzVal) {
                return false;
            }
            row++;
            col++;
        }
    }
    
    return true;
};