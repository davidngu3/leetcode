// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function(nums) {
    let counter = 0;
    for (i of nums) {
        if (i.toString().length % 2 == 0) {
            counter++;
        }
    }

    return counter;
};

console.log(findNumbers([5, 2, 35, 255]));