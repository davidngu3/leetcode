class Solution62 {
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m+1][n+1];
        
        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                
                // edge cases
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                }
                else if (i == 1 && j == 1) {
                    dp[i][j] = 1;
                }
                // memoization
                else {
                    dp[i][j] = dp[i-1][j] + dp[i][j-1]; // add upper and left dp cells
                }
                
            }
        }
        
        return dp[m][n];
    }
}