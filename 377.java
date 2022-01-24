import java.util.*;

class Solution377 {
    public static void main(String[] args) {
        combinationSum4(new int[] {1, 2, 3}, 4);
    }

    public static int combinationSum4(int[] nums, int target) {
        int[] memo = new int[target+1];
        
        // base case: 1 ways to make 0 (take none)
        memo[0] = 1;
        
        for (int i = 1; i < memo.length; i++) {
            for (int c : nums) {
                // if within bounds, add ways to make i - c
                if (i - c >= 0) {
                    memo[i] += memo[i-c];    
                }    
            }
        }
        
        return memo[target];
    }
}