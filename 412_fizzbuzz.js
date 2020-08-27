/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var ret = [];
    
    for (let i = 1; i <= n; i++) {
        var ans = "";
        if (i % 3 == 0 && i % 5 == 0) {
            ret.push("FizzBuzz");
        }
        else if (i % 5 == 0) {
            ret.push("Buzz");
        }
        else if (i % 3 == 0) {
            ret.push("Fizz");
        }
        else {
            ret.push(i.toString());
        }
    }
    
    return ret;
};