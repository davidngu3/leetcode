/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var uniques = new Set(candies);
    
    return uniques.size >= candies.length / 2 ? candies.length / 2 : uniques.size; 
};