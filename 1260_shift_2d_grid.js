/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    var ret = [];
    for (let i = 0; i < grid.length; i++) {
        ret[i] = grid[i].slice();
    }
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            [newRow, newCol] = shiftNum(r, c, grid.length-1, grid[0].length-1, k);
            ret[newRow][newCol] = grid[r][c];
        }
    }
    
    return ret;    
};


function shiftNum(r, c, rmax, cmax, k) {
    while (k > 0) {
        if (r == rmax && c == cmax) { // end of grid; reset to [0, 0]
            r=0;
            c=0;
        }
        else if (c == cmax) { // end of row; reset col, increment row
            r++;
            c=0;
        }
        else {
            c++; // shift by 1
        }
        k--; // decrement shift counter
    }
    
    return [r, c];
}