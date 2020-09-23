/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = new Array(amount+1).fill(Infinity);
    
    for (let coin of coins) {
        for (let m = 0; m <= amount; ++m) {
            if (m == 0) {
                memo[m] = 0;
            }
            else if (coin > m) {
                memo[m] = memo[m];
            }
            else {
                memo[m] = Math.min(memo[m], memo[m-coin]+1);
            }
        }
    }
  
    if (memo[amount] == Infinity) {
        return -1;
    }
    else {
        return memo[amount];
    }
    
};
