/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var roundScores = []; // stack of round scores
    
    for (e of ops) {
        if (e == 'C') {
            roundScores.pop();
        }
        else if (e == 'D') {
            var previousScore = roundScores[roundScores.length-1];
            roundScores.push(parseInt(previousScore) * 2);
        }
        else if (e == '+') {
            var prevScore = roundScores[roundScores.length-1];
            var prevScore2 = roundScores[roundScores.length-2];
            roundScores.push(parseInt(prevScore) + parseInt(prevScore2));
        }
        else { // e is an integer
            roundScores.push(parseInt(e));
        }
    }
    console.log(roundScores);
    return roundScores.reduce((acc, e) => acc + e, 0);
};