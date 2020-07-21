/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    var temp1 = [];
    var temp2 = [];
    
    // sort arr1 into arr2-contained elements and non-arr2-containing elements
    for (let i=0; i<arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            temp1.push(arr1[i]);
        }
        else {
            temp2.push(arr1[i]);
        }
    }
    
    temp1.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));
    temp2.sort((a, b) => a - b);
    
    return [...temp1, ...temp2];
};