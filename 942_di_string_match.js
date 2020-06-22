// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]

var diStringMatch = function(S) { 
    let output = [];
    
    let dcount = 0;
    for (let i=0; i<S.length; i++) {
        if (S[i] == "D") {
            dcount++;
        }
    }
    
    let scount = dcount + 1;
    
    output.push(dcount);
    dcount--;
    
    for (let i=0; i<S.length; i++) {
        if (S[i] == "I") {
            output.push(scount);
            scount++;
        }
        else {
            output.push(dcount);
            dcount--;
        }
    }
    
    return output;
};