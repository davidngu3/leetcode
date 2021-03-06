/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    intervals.sort((a, b) => a[0] - b[0]); // sort on first value
    
    let ret = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    intervals.push([Infinity, Infinity]); // dummy final value so that last interval is always pushed
    
    for (let i = 1; i < intervals.length; ++i) {
        if (intervals[i][0] > end) { // this interval is separate; create new pointers
            ret.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
        else if (intervals[i][0] <= end && intervals[i][1] > end) { // the current interval can be extended
            end = intervals[i][1];
        }
    }
    
    return ret;
    
};

