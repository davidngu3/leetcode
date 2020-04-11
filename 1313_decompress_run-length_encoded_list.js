/*
We are given a list nums of integers representing a list compressed with run-length encoding.
Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are a elements with value b in the decompressed list.
Return the decompressed list.
*/

var decompressRLElist = function(nums) {
    let arrayOut = [];
    for (let i = 0; i < nums.length; i+=2 ) {
        for (let j = 0; j < nums[i]; j++ ) {
            arrayOut.push(nums[i+1]);
        }
    } 
    return arrayOut;
};

console.log(decompressRLElist([1, 3, 2, 6, 9, 6, 2, 1, 5, 4]));
