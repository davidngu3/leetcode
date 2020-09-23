/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = new Array(coins.length+1).fill().map(e => new Array(amount+1).fill(Infinity));
    
    for (let r = 0; r < memo.length; ++r) {
        for (let c = 0; c < memo[0].length; ++c) {
            if (r == 0) {
                memo[r][c] = Infinity;
            }
            else if (c == 0) {
                memo[r][c] = 0;
            }
            else if (coins[r-1] > c) {
                memo[r][c] = memo[r-1][c];
            }
            else {
                memo[r][c] = Math.min(memo[r-1][c], memo[r][c-coins[r-1]] + 1);
            }
        }
    }
  
    if (memo[coins.length][amount] == Infinity) {
        return -1;
    }
    else {
        return memo[coins.length][amount];
    }
    
};
