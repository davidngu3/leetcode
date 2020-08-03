/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    var DP = new Array(N+1);
    DP[1] = false; // base case: with a starting value of 1, alice loses because she has no turn
    
    for (let i=2; i<=N; i++) {
        var divisors = findDivisors(i);
        var success = false;
        
        var j = 0;
        while (!success && j<divisors.length) {
            if (DP[i-divisors[j]] == false) {
                success = true;
                DP[i] = true;
            } 
            j++;
        }
        if (!success) {
            DP[i] = false;
        }
        
    }
    
    return DP[N];
};

function findDivisors(n) {
    var ret = [1];
    for (let i=2; i<=Math.floor(n/2); ++i) {
        if (n % i == 0) {
            ret.push(i);
        }
    }
    return ret;
}
