/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    var islandCount = 0;
    
    for (let r = 0; r < grid.length; ++r) {
        for (let c = 0; c < grid[0].length; ++c) {
            if (grid[r][c] == '1') {          // if unexplored island found
                DFS(grid, r, c);              // explore whole island
                islandCount++;                // increment number of islands
            }  
        }
    }
    
    return islandCount;
};

var DFS = function(grid, row, col) {
    // base case: out of bounds or ocean block
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] == '0') {
        return; 
    }

    grid[row][col] = '0'; // set island piece to 0  

    DFS(grid, row+1, col); // check down
    DFS(grid, row-1, col); // check up
    DFS(grid, row, col+1); // check right
    DFS(grid, row, col-1); // check left
}