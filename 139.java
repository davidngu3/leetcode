import java.util.*;

class Solution139 {
    public static void main(String[] args) {

    }

    public static boolean wordBreak(String s, List<String> wordDict) {
        HashMap<String, Boolean> dict = new HashMap<>();
        for (String word : wordDict) {
            dict.put(word, true);
        }

        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true; // empty string can be made

        for (int i = 1; i < n + 1; i++) {

            for (int j = i - 1; j >= 0; j--) {

                if (dp[j] == true && dict.containsKey(s.substring(j, i))) {
                    dp[i] = true;
                }
            }
        }

        return dp[n];
    }
}