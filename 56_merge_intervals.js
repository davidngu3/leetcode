/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    intervals.sort(intervalSort);
    let ret = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    intervals.push([Infinity, Infinity]); // dummy final value so that last interval is always pushed
    
    for (let i = 1; i < intervals.length; ++i) {
        if (intervals[i][0] <= end && intervals[i][1] <= end) { // this interval is completely overlapped, skip this interval
            continue;
        }
        else if (intervals[i][0] <= end) { // this interval extends the current interval
            end = intervals[i][1];
        }
        else { // this interval is separate; create new pointers
            ret.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
    
    return ret;
    
};

var intervalSort = function(intA, intB) {
    if (intA[0] == intB[0]) {
        return intA[1] - intB[1]; 
    }
    else {
        return intA[0] - intB[0];
    }
}