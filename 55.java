class Solution55 {
    public static void main(String[] args) {
        canJump(new int[] {0, 2, 3});
    }

    public static boolean canJump(int[] nums) {
        // edge cases

        if (nums.length == 1) {
            return true;
        } 
        
        if (nums.length == 2) {
            return nums[0] > 0;
        }

        if (nums[0] == 0) {
            return false;
        }

        // stores furthest reachable index
        int[] dp = new int[nums.length]; 
        dp[0] = nums[0];

        for (int i = 1; i < nums.length - 1; i++) {
            // early failure condition: cannot jump past zero
            if (nums[i] == 0 && dp[i-1] <= i) {
                return false;
            }
            
            // calculate max reachable index
            dp[i] = Math.max(dp[i-1], i+nums[i]);

            // early success condition: reachable index at/past final index
            if (dp[i] >= nums.length - 1) {
                return true;
            }
            
        }
 
        return false;

    }
}