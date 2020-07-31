/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr = arr.sort((a, b) => a - b);
    var minDiff = findMinimumDiff(arr);
    
    var ans = [];
    for (let i = 0; i < arr.length-1; ++i) {
        var current = arr[i];
        var next = arr[i+1]
        if (Math.abs(current - next) == minDiff) {
            ans.push([current, next]);
        }
    }
    
    return ans;
    
};

function findMinimumDiff(arr) {
    let prev = arr[0];
    let minimum = Infinity;
    
    for (let i = 1; i < arr.length; ++i) {
        let probedMin = Math.abs(arr[i] - prev);
        if (probedMin < minimum) {
            minimum = probedMin;
        }
        prev = arr[i];
    }
    
    return minimum;
}