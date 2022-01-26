class Solution91 {
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

            // invalid case: 0 cannot be paired
            if (currChar == 0 && (prevChar == 0 || prevChar > 2)) {
                return 0;
            }
            
            // reduce way case: 0 must be attached, cannot be standalone
            if (currChar == 0) {
                if (i == 1) {
                    memo[i] = 1;
                }
                else {
                    memo[i] = memo[i-2];
                }
            }   

            // new way case: new char makes a double digit valid numeral
            else if (prevChar == 1 || prevChar == 2 && currChar <= 6) {
                if (i == 1) {
                    memo[i] = memo[i-1] + 1;
                }
                else {
                    memo[i] = memo[i-1] + memo[i-2];
                }
            }
            
            else {
                memo[i] = memo[i-1];
            }
        }
        
        return memo[s.length() - 1];
    }
}