/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    var top = 0;
    var bottom = 0;
    var front = 0;
    var back = 0;
    var left = 0;
    var right = 0;
    
    
    for (let r = 0; r < grid.length; ++r ) {
        for (let c = 0; c < grid[0].length; ++c ) {
            // case 1 & 2: top-down and bottom-up views
            if (grid[r][c]) {
                top++;
                bottom++;
            }
            
            // case 3: front view 
            if (r == grid.length-1) {                // on front side of sculpture? 
                front += grid[r][c];                 // add whole face
            } 
            else if (grid[r][c] > grid[r+1][c]) {    // taller than one in front?
                front += grid[r][c] - grid[r+1][c];  // add the difference
            }
            
            // case 4: back view
            if (r == 0) {                           // on back side of sculpture? 
                back += grid[r][c];                 // add whole face
            } 
            else if (grid[r][c] > grid[r-1][c]) {   // taller than one in back?
                back += grid[r][c] - grid[r-1][c];  // add the difference
            }
            
            // case 5: left view
            if (c == 0) { 
                left += grid[r][c];
            }
            else if (grid[r][c] > grid[r][c-1]) { 
                left += grid[r][c] - grid[r][c-1];
            }
            
            // case 6: right view
            if (c == grid[0].length - 1) {
                right += grid[r][c];
            }
            else if (grid[r][c] > grid[r][c+1]) {
                right += grid[r][c] - grid[r][c+1];
            }
        } 
    }
    
    return top + bottom + front + back + left + right;
    
};