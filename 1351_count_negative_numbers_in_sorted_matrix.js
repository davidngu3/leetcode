// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
// Return the number of negative numbers in grid.


// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let ans = 0;
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] < 0) {
                ans++;
            }
        }
    }

    return ans;
};

// this matrix is sorted, so we could optimise by using binary search to find the first negative number in each row 