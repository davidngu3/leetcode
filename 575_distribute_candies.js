/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var uniques = [];
    
    for (var candy of candies) {
        if (!uniques.includes(candy)) {
            uniques.push(candy);
        }
    }
    
    return uniques.length >= candies.length / 2 ? candies.length / 2 : uniques.length; 
};