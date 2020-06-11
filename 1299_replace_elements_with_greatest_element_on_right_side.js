// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.
 
// Example 1:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (arr.length >  2) {
        for (let i=0; i < arr.length - 2; i++) {
            let maxElement = arr[i+1]
            for (let j=i+1; j<arr.length; j++) {
                if (arr[j] > maxElement) {
                    maxElement = arr[j];
                }
            }
            arr[i] = maxElement;
        }
    }

    arr[arr.length-2] = arr[arr.length-1];
    arr[arr.length-1] = -1;

    return arr;
};

console.log(replaceElements([17,18]));