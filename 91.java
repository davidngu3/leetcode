class Solution91 {
    /*
        Read string s one char at a time
        If new char cannot be paired with the previous char, it is equivalent to appending it to all the combinations without it
        If new char is not 0 can be paired with previous char, introducing a double digit val 11 <= x <= 26, it is equivalent to appending single digit to combinations without it,
            plus appending double digit to combinations without the double digit
        If new char is 0 and can be paired with previous char, it is equivalent to appending the double digit to combinations without the double digit.

        memo[i-1] represents the number of ways to decode s[0:i-1]
        memo[1-2] represents the number of ways to decode s[0:i-2]
    */
    public static void main(String[] args) {
        numDecodings("2611055971756562");    
    }

    public static int numDecodings(String s) {
        // edge case: starts with 0
        if (s.charAt(0) == '0') {
            return 0;
        } 

        // base case: 1 way to decode first char 
        int[] memo = new int[s.length()];
        memo[0] = 1;

        char[] c = s.toCharArray();
        for (int i = 1; i < c.length; i++) {
            int currChar = Character.getNumericValue(c[i]);
            int prevChar = Character.getNumericValue(c[i-1]);

            // invalid case: 0 cannot be paired with previous number
            if (currChar == 0 && (prevChar == 0 || prevChar > 2)) {
                return 0;
            }
            
            // double digit append: 0 must be attached to previous number, cannot be standalone
            if (currChar == 0) {
                if (i == 1) {
                    memo[i] = 1;
                }
                else {
                    memo[i] = memo[i-2];
                }
            }   

            // single digit + double digit append: new char makes a double digit valid numeral
            else if (prevChar == 1 || prevChar == 2 && currChar <= 6) {
                if (i == 1) {
                    memo[i] = memo[i-1] + 1;
                }
                else {
                    memo[i] = memo[i-1] + memo[i-2];
                }
            }
            
            // single digit append
            else {
                memo[i] = memo[i-1];
            }
        }
        
        return memo[s.length() - 1];
    }
}