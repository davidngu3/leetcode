/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s) {
    return s.length > 0 ? (s == s.split('').reverse().join('') ? 1 : 2) : 0;
}