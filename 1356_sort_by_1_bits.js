// Given an integer array arr. 
// You have to sort the integers in the array in ascending order by the number of 1's in their binary representation 
// and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the sorted array.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a, b) => countBits(a) - countBits(b) || a - b);
};

var countBits = function(num) {
    let count = 0;
    
    // continuously collect the rightmost bit and rightshift 
    while (num) {
        count += num & 1;
        num = num >> 1
    }

    return count;
}