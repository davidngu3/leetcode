// Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. 
// For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.
// Return the number of cells with odd values in the matrix after applying the increment to all indices.

// Example 1:
// Input: n = 2, m = 3, indices = [[0,1],[1,1]]
// Output: 6
// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    // create pre-filled matrix 
    let array = Array(n).fill().map(() => Array(m).fill(0)); // note Array(n).fill() is equivalent to [...Array(m)]
    
    // increment appropriate matrix cells
    for (let i=0; i < indices.length; i++) {
        let incRow = indices[i][0];
        let incCol = indices[i][1];

        for (let x=0; x < m; x++) {
            array[incRow][x]++;
        }
        for (let y=0; y < n; y++) {
            array[y][incCol]++;
        }
    }

    // check for odd cells
    let result = 0;
    for (let p=0; p < n; p++) {
        for (let q=0; q<m; q++) {
            if (array[p][q] % 2 !== 0) {
                result++;
            }
        }
    }

    return result;
};

oddCells(2, 3, [[0,1],[1,1]]);