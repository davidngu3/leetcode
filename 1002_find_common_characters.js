/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    var current = A[0].split('');
    
    var i = 1;
    while (i<A.length && (current.length > 0)) {
        current = findIntersection(current, A[i].split(''));
        i++;
    }
    
    return current;
};

var findIntersection = function(a, b){
    return a.filter( v => {
        let i = b.indexOf(v);
        if(i !== -1){   // if same letter exists in a and b, remove the letter from b
            b.splice(i, 1);
            return true
        }
        return false; 
    })
  }

commonChars(["cool", "lock", "cook"]);