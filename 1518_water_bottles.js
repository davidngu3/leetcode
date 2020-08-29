/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var ret = numBottles;
    var emptyBottles = numBottles;
    
    while (emptyBottles >= numExchange) {
        ret += Math.floor(emptyBottles / numExchange);
        
        var newBottles = Math.floor(emptyBottles / numExchange);
        emptyBottles -= newBottles * numExchange;
        emptyBottles += newBottles;
    }
    
    return ret;
};