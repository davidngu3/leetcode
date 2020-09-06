/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    var ret = [];
    for (let i = 0; i < grid.length; i++) {
        ret[i] = new Array(grid[0].length);
    }
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            var newCol = (c + k) % grid[0].length;
            var rowIncrements = Math.floor((c + k) / grid[0].length);
            var newRow = (r + rowIncrements) % grid.length;
            ret[newRow][newCol] = grid[r][c];
        }
    }
    
    return ret;    
};


