/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    return N % 2 == 0 ? true : false;
};

// WHY IS THIS THE CASE?
// In this game, alice always goes first and subtracts a divisor of N from N.
// The base value is 1, which alice will always lose.
// Thus on N = 2, alice can win simply by subtracting 1 and leaving bob with the base case of 1
// on N = 3, alice loses because she can only subtract 1, which leaves Bob starting with N = 2, which we proved he wins in the last line
// on N = 4, alice wins because she can simply subtract 1 to leave bob with the losing case from the last line.
// on N = 5, alice loses because she can only subtract 1, which leaves Bob starting with N = 4, which we proved he wins in the last line.
// ...
// In general, if N is even, alice will win because she can subtract 1 to make N odd
// When N is odd, the player must subtract a divisor of N. Divisors of N are always odd, so N will always end up odd. The first odd N was 1, which is false, so alice will always lose on odd N.