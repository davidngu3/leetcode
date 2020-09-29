/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let L = 0;
    let R = -1; 
    let ret = "";
    
    // find first good window
    var foundFlag = false;
    while (!foundFlag) {
        if (R == s.length - 1) {
            return "";     // there is no good window
        }
        
        R++; // increment right pointer
        if (isWindowGood(s, t, L, R)) {
            ret = s.substring(L, R+1);
            foundFlag = true;
        }
    } 
    var contractFlag = false;
    while (!contractFlag) {
        L++;
        if (!isWindowGood(s, t, L, R)) {
            contractFlag = true;
        } 
        else {
            ret = s.substring(L, R+1);
        }
    }
    
    while (R < s.length - 1) {
        var slideFlag = false;
        while (!slideFlag) {
            if (R == s.length - 1) {
                return ret;
            }
            R++; 

            if (isWindowGood(s, t, L, R)) {
                ret = s.substring(L, R+1);
                slideFlag = true;
            }
        }
        
        var contractFlag = false;
        while (!contractFlag) {
            L++;
            if (!isWindowGood(s, t, L, R)) {
                contractFlag = true;
            } 
            else {
                ret = s.substring(L, R+1);
            }
        }
    }
    
    return ret;
};


function isWindowGood(s, t, L, R) {
    let window = s.substring(L, R+1).split('');
    
    for (let i = 0; i < t.length; ++i ) {
        let winDex = window.indexOf(t[i]);
        if (winDex < 0) {
            return false;
        }
        else {
            window[winDex] = null;
        }
    }
    return true;
}
