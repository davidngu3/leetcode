// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]

var diStringMatch = function(S) { 
    let output = [];
    
    let lo = 0;
    let hi = S.length;
    
    for (let i=0; i<S.length+1; i++) {
        if (S[i] == "I") {
            output.push(lo);
            lo++;
        }
        else {
            output.push(hi);
            hi--
        }
    }
    return output;
};