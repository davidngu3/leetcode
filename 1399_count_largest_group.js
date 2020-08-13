/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    var digObj = {};
    
    
    for (let i = 1; i <= n; i++) {
        var digits = i.toString().split('');
        var digSum = digits.reduce((acc, e) => acc + parseInt(e), 0);
        
        if (digObj.hasOwnProperty(digSum)) {
            digObj[digSum].push(i);
        }
        else {
            digObj[digSum] = [i];
        }
    }
    
    // find the largest size
    var ret = 0;
    var largestSize = 0;
    
    for (var e of Object.values(digObj)) {
        if (e.length == largestSize) {
            ret++;
        }
        if (e.length > largestSize) {
            largestSize = e.length;
            ret = 1
        }
    }
   
    return ret;
};