class Solution1143 {
    public static void main(String[] args) {
        longestCommonSubsequence("jmjkbkjkv", "bsbininm");

    }
    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();
        
        if (m == 0 || n == 0) {
            return 0;
        }
        
        int[][] dp = new int[m][n];
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {                
                if (text1.charAt(i) == text2.charAt(j)) {
                    if (i == 0 && j == 0) {
                        dp[i][j] = 1;
                    }
                    else if (i == 0) {
                        dp[i][j] = Math.max(dp[i][j-1], 1);
                    }
                    else if (j == 0) {
                        dp[i][j] = Math.max(dp[i-1][j], 1);
                    }
                    else {
                        dp[i][j] = Math.max(Math.max(dp[i-1][j], dp[i][j-1]), 1 + dp[i-1][j-1]);
                    }
                    
                }
                else {
                    if (i == 0 && j == 0) {
                        dp[i][j] = 0;
                    }
                    else if (i == 0) {
                        dp[i][j] = dp[i][j-1];
                    }
                    else if (j == 0) {
                        dp[i][j] = dp[i-1][j];
                    }
                    else {
                        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                    }
                }
            }
        }
        
        return dp[m-1][n-1];
    }
}