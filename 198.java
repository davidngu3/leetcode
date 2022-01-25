class Solution198 {
    public int rob(int[] nums) {
        // memo array
        int[] memo = new int[nums.length];
        
        // base case
        memo[0] = nums[0];
        
        // fill values
        for (int i = 1; i < nums.length; i++) {
            if (i == 1) {
                memo[i] = Math.max(memo[i-1], nums[i]);
            }
            else {
                memo[i] = Math.max(memo[i-1], memo[i-2] + nums[i]);
            }
        }
        
        // return
        return memo[nums.length-1];
    }
}