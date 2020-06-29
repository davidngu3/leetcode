/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count = {};
    
    for (let i=0; i<arr.length; i++) {
        if (count.hasOwnProperty(arr[i])) {
            count[arr[i]]++;
        }   
        else {
            count[arr[i]] = 1;
        }
    }
    
    let uniqueSet = new Set(Object.values(count));
    return Object.values(count).length == uniqueSet.size;
  
};

uniqueOccurrences([1,2,2,1,1,3]);