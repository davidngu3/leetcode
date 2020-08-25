/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    var ret = 0;
    
    for (let i = L; i <= R; i++) {
        var bitCount = 0;
        var n = i;
    
        while (n) {
            bitCount += n & 1;
            n = n >> 1;
        }
        
        if (isPrime(bitCount)) {
            ret++;
        }
    }
    
    return ret;
};

var isPrime = function(N) {
    if (N == 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.floor(N/2); ++i ) {
        if (N % i == 0) {
            return false;
        }
    }
    
    return true;
}