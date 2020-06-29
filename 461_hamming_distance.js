// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var difference = 0;

    // obtain the XOR value; the sum of 1 bits in this will be the answer
    var xor = x ^ y;
    
    // to get that sum, we simply bitwise right shift the number until 0, incrementing the counter if the rightmost bit is 1
    while (xor != 0) {y
        if (xor & 1) {
            ++difference;
        }
        xor = xor >> 1;
    }
    
    return difference;
};


