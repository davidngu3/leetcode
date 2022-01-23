import java.util.*;

class Solution139 {
    public static void main(String[] args) {
        
    }

    public static boolean wordBreak(String s, List<String> wordDict) {
        int n = s.length();
        int[] dp = new int[n + 1];
        dp[0] = 1; // empty string can be made
        
        for (int i = 1; i < n + 1; i++) {
            
            for (int j = i-1; j >= 0; j--) {
                
                if (dp[j] == 1 && wordDict.contains(s.substring(j, i))) {
                    dp[i] = 1;
                }
            }
        }
        
        return dp[n] == 1;
    }
}