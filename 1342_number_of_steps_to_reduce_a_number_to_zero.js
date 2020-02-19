// Given a non-negative integer num, return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = num => {
    var numSteps = 0;

    while (num > 0) {
        num = num % 2 === 0 ? num / 2 : num - 1;
        numSteps++;
    }

    return numSteps;
};

// note: can be implemented recursively
// can be solved using bit manipulation

