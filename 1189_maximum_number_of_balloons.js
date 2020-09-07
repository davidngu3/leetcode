/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    // for each balloon, need 1xb, 1xa, 2xl, 2xo, 1xn: in array [x, x, x, x, x]
    
    var countArray = new Array(5).fill(0);
    
    for (var i=0; i<text.length; ++i) {
        switch (text[i]) {
            case 'b':
                countArray[0]++;
                break;
            case 'a':
                countArray[1]++;
                break;
            case 'l':
                countArray[2]++;
                break;
            case 'o':
                countArray[3]++;
                break;
            case 'n':
                countArray[4]++;
                break;
        }
    }
    
    countArray = countArray.map((e, i) => {
        if (i == 2 || i == 3) {
            return Math.floor(e / 2);
        }
        else {
            return e;
        }
    })
    
    return Math.min(...countArray);

};