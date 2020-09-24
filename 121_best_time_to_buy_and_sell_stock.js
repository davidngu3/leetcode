/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0;
    let buyPrice = prices[0];
    
    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] < buyPrice) {  // lower buying price found, update buy price 
            buyPrice = prices[i];
        }
        else if (prices[i] - buyPrice > profit) { // better profit found, update profit
            profit = prices[i] - buyPrice;
        }
    }
    
    return profit;
};

// the idea behind this algorithm:
// each time we find a new lower buy price, update the buy price and then iterate forwards, taking the 'projected' profit at each iteration and updating if
// a higher one is found.
// updating current buy price B to a lower buy price L is always optimal; there is never circumstance where keeping a higher buy price is better
// say there is a stock price X which is found after P. X-L will always yield a higher profit than X-B, thus updating buy price to L is optimal.