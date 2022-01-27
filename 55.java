class Solution55 {
    public static void main(String[] args) {
        canJump(new int[] {0, 2, 3});
    }
    public static boolean canJump(int[] nums) {
        boolean[] dp = new boolean[nums.length];
        dp[0] = true; 
        
        for (int i = 0; i < nums.length - 1; i++) {
            if (dp[i]) { // if this cell is accessible
                int jumps = nums[i];
            
                // mark jumps as accessible
                for (int j = 1; j <= jumps; j++) {
                    
                    // if jump goes to or outside end index, return true;
                    if (i + j >= nums.length - 1) {
                        return true;
                    }
                    
                    dp[i+j] = true;
                }
            }
            
            
        }
        
        return dp[nums.length - 1];
    }
}