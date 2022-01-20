import java.util.*;

class Solution322 {
    public static void main(String[] args) {
        coinChange(new int[] {1, 2, 5}, 11);
    }

    public static int coinChange(int[] coins, int amount) {
        // set up memo array
        int[] memo = new int[amount+1];
        Arrays.fill(memo, -1);

        // memo base case, 0 coins to make 0 dollars
        memo[0] = 0;

        // populate memo
        // memo[i] = min of: { for coin value x in coins, memo[i-x] + 1 } : i >= x
        for (int i = 1; i < memo.length; i++) {
            int coinsNeeded = Integer.MAX_VALUE;

            for (int val : coins) {
                if (i >= val && memo[i-val] >= 0) {
                    coinsNeeded = Math.min(coinsNeeded, memo[i-val] + 1);
                }
            }

            if (!(coinsNeeded == Integer.MAX_VALUE)) {
                memo[i] = coinsNeeded;
            }
        }

        return memo[amount];
    }
}