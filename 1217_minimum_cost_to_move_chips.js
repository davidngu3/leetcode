/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let evenCounter = 0;
    let oddCounter = 0;
    
    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 == 0) {
            evenCounter++;
        }
        else {
            oddCounter++;
        }
    }
    
    return Math.min(evenCounter, oddCounter);
};