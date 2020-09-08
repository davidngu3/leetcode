/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    // thousand separators happen every 3 digits from right to left
    var ret = "";
    var number = n.toString();

    var thousandCounter = 0; // idea: maintain a counter, prepend a dot (and reset) whenever it reaches 3
    
    for (let i = number.length-1; i >=0 ; i--) {
        if (thousandCounter == 3) {
            ret = "." + ret;
            thousandCounter = 0;
        }
        ret = number[i] + ret;
        thousandCounter++;
    }
    
    return ret;
};