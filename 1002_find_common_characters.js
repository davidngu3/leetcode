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

function findIntersection(a, b) {
    let duplicates = [];
    
    for (let i=0; i<a.length; i++) {
        for (let j=0; j<b.length; j++) {
            if (a[i] == b[j] && !(a[i] == '0')) {
                duplicates.push(a[i]);
                a[i] = '0'; // replace with wildcard to pick up duplicates but not mess up indexing
                b[j] = '0'; 
            }
        }
    }
    
    return duplicates;
}

commonChars(["cool", "lock", "cook"]);