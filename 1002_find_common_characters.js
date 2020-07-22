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
            if (a[i] == b[j]) {
                duplicates.push(a[i]);
                b[j] = '0'; // replace with wildcard to pick up duplicates but not mess up indexing
            }
        }
    }
    
    return duplicates;
}

commonChars(["bella","label","roller"]);