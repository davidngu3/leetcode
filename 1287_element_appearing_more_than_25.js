/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    var cutoff = arr.length / 4; 
    
    var freq = {};
    
    for (var i = 0; i < arr.length; ++i) {
        if (!freq.hasOwnProperty(arr[i])) {
            freq[arr[i]] = 1;
        }
        else {
            freq[arr[i]]++;
        }
        if (freq[arr[i]] > cutoff) {
            return arr[i];
        }
    }
    return null;
};