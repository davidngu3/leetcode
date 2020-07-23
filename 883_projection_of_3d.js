/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let area = 0;
    
    // first projection is num of cells > 0 in grid
    let first = 0;
    // second projection is sum of max of rows
    let secondMax = 0;
    // third projection is sum of max of columns
    let thirdMax = 0;
    
    for (let i = 0; i < grid.length; i++) {        
        for(let j = 0; j < grid.length; j++) {
            if (grid[i][j] > secondMax) {
                secondMax = grid[i][j];
            }
            
            if (grid[j][i] > thirdMax) {
                thirdMax = grid[j][i];
            }
            
            if (grid[i][j] > 0) {
                first++;
            }
        }
        
        area += first + secondMax + thirdMax;
        first = 0;
        secondMax = 0;
        thirdMax = 0;
    }
    
    return area;
};