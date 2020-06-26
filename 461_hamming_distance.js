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

    // convert to binary
    var xdec = x.toString(2);
    var ydec = y.toString(2);

    // append 0s to front of the shorter integer so that the digits match up for iteration
    var longer;
    var shorter;
    if (xdec.length > ydec.length) {
        longer = xdec;
        shorter = ydec;
    }
    else {
        longer = ydec;
        shorter = xdec;
    }
    while (longer.length > shorter.length) {
        shorter = "0" + shorter;
    }

    // compare bits
    for (let i=0; i<shorter.length; i++) {
        if (shorter[i] !== longer[i]) {
            difference++;
        }
    }

    return difference;
};
