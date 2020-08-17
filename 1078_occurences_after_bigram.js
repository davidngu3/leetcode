/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    return text.split(" ").filter((e, i, arr) => arr[i-2] == first && arr[i-1] == second);
};