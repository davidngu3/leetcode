/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr = arr.sort((a, b) => a - b);
    var diffArray = generateDiffArray(arr);
    var ans = [];
    
    var minDiff = Math.min(...diffArray);
    for (let i = 0; i < diffArray.length; i++) {
        if (diffArray[i] == minDiff) {
            ans.push([arr[i], arr[i+1]]);
        }
    }
    
    return ans;
    
};

function generateDiffArray(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length - 1; ++i) {
        newArr.push(Math.abs(arr[i+1] - arr[i]));
    }
    
    return newArr;
}