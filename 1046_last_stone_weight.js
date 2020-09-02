/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        var [heavy, secondheavy] = getHeaviest(stones);
        
        var secondHeavyVal = stones[secondheavy];
        var diff = stones[heavy] - stones[secondheavy];
        
        if (diff == 0) {
            stones.splice(heavy, 1);
        }
        else {
            stones[heavy] = diff;
        }
        var remIndex = stones.indexOf(secondHeavyVal);
        stones.splice(remIndex, 1);
    }
    
    return stones;
};

var getHeaviest = function(stones) {
    var heaviest = 0
    var secondheavy;
    
    if (stones[1] > stones[heaviest]) {
        secondheavy = 0
        heaviest = 1;
    }
    else {
        secondheavy = 1;
    }
    
    for (let i = 2; i < stones.length; i++) {
        if (stones[i] > stones[heaviest]) {
            secondheavy = heaviest;
            heaviest = i;
        }
        else if (stones[i] > stones[secondheavy]) {
            secondheavy = i;
        }
    }
    
    return [heaviest, secondheavy];
}