/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    
    for (let row=0; row<grid.length; row++) {
        for (let col=0; col < grid[0].length; col++) {
            if (grid[row][col] == 1) {
                // check left
                if (col == 0 || grid[row][col-1] == 0) perimeter++;
                // check right
                if (col == grid[0].length-1 || grid[row][col+1] == 0) perimeter++; 
                // check up
                if (row == 0 || grid[row-1][col] == 0) perimeter++;
                // check down
                if (row == grid.length - 1 || grid[row+1][col] == 0) perimeter++;
            }
        }
    }
    
    return perimeter;
};