/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    var lines = [0];
    
    for (let i=0; i<S.length; i++) {
        var charIndex = S.charCodeAt(i) - "a".charCodeAt(0);
        var charWidth = widths[charIndex];
        
        if (lines[lines.length-1] + charWidth > 100) {
            lines.push(charWidth);
        }
        else {
            lines[lines.length-1] += charWidth;
        }
    }
    
    return [lines.length, lines[lines.length-1]];
};