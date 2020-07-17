/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let answer = [];
    for (let i=0; i<S.length; i++){
        // if not duplicate
        if(S[i] !== answer[answer.length-1]) {
            answer.push(S[i]);
        // if duplicate found, pop off stack
        } else {
            answer.pop();
        }
    }
    return answer.join("");
};