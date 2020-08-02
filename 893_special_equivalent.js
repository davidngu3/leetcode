/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    var set = [];
    
    for (let word of A) {
        let odd = [];
        let even = [];
    
        for (let i=0; i<word.length; i++) {
            if (i % 2 == 0) {
                even.push(word[i]);
            }
            else {
                odd.push(word[i]);
            }
        }
        
        let alreadyExists = false;
        odd = odd.sort();
        even = even.sort();
        for (let item of set) {
            if (compareArrays(even, item[0]) && compareArrays(odd, item[1])) {
                alreadyExists = true;
            }
        }
        if (!alreadyExists) {
            set.push([even, odd]);
        }
        alreadyExists = false;
    }
    
    return set.length;
};


function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (let i=0; i<arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
