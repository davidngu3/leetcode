/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {

    while (findDuplicate(S) !== null) {
        let dIndex = findDuplicate(S)
        S = S.replace(S.substring(dIndex, dIndex+2), "");
    }

    return S;
};

// returns the first index which is succeeded by a duplicate letter
function findDuplicate(S) {
    for (let i=1; i<S.length; i++) {
        if (S[i] == S[i-1]) {
            return i-1;
        }
    }
    return null;
}

removeDuplicates("abbaca");