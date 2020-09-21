/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length == 0) {
        return 0;
    }
    
    var width = grid[0].length;
    var height = grid.length;
    var numIslands = 0;
    
    var mem = new Array(height).fill().map(e => new Array(width).fill(0)); // store state of explored squares
    
    for (let r = 0; r < height; ++r) {
        for (let c = 0; c < width; ++c) {
            if (mem[r][c] == '0' && grid[r][c] == '1') { // if unexplored island found
                traverse(r, c, grid, mem);
                numIslands++;
            }  
        }
    }
    
    return numIslands;
    
};

var traverse = function(row, col, grid, mem) {
    if (grid[row][col] == '1') {
        mem[row][col] = 1;
    }
    else {
        return; // stop traversing if hit ocean
    }
    
    // check up
    if (row >= 1 && mem[row-1][col] == '0') {
        traverse(row-1, col, grid, mem);
    }
    
    // check left
    if (col >= 1 && mem[row][col-1] == '0') {
        traverse(row, col-1, grid, mem);
    }
    
    // check down
    if (row < grid.length-1 && mem[row+1][col] == '0') {
        traverse(row+1, col, grid, mem);
    }
    
    // check right
    if (col < grid[0].length-1 && mem[row][col+1] == '0') {
        traverse(row, col+1, grid, mem);
    }
    
    return;
}