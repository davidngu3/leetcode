// On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

// You can move according to the next rules:

// In one second always you can either move vertically, horizontally by one unit or diagonally 
// (it means to move one unit vertically and one unit horizontally in one second).
// You have to visit the points in the same order as they appear in the array.

// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
// Time from [1,1] to [3,4] = 3 seconds 
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds


/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    // thought: seems like travelling diagonally is the most efficient, 
    // so travel diagonal from point to point until not possible, then travel h/z until point reached

    var currentPoint = points[0];
    var totalDist = 0;

    for (let i=0; i<points.length; i++) {
        totalDist += findMinDistance(currentPoint, points[i]);
        currentPoint = points[i];
    };

    return totalDist;

};

var findMinDistance = function(point1, point2) {
    // e.g. [1,1], [3,4] - we travel diagonal +1, 1
    // on observation the distance is the larger distance x or y.
    // why? because to cover the smallest distance we can simply travel diagonally toward the larger x/y and finish off vertical/horizontally
    var diffX = Math.abs(point2[0] - point1[0]);
    var diffY = Math.abs(point2[1] - point1[1]);
    return Math.max(diffX, diffY); 
}