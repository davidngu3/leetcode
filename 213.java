class Solution213 {
    public static void main(String[] args) {
        robCircular(new int[] {1, 4, 9, 8, 7});    
    }

    public static int robCircular(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }

        // first pass

        // memo array
        int[] memo = new int[nums.length];
        
        // base case
        memo[1] = nums[1];
        
        // fill values
        for (int i = 2; i < nums.length; i++) {
            memo[i] = Math.max(memo[i-1], memo[i-2] + nums[i]);
        }

        // second pass

        int[] memo2 = new int[nums.length];
        
        // base case
        memo2[0] = nums[0];
        
        // fill values
        for (int i = 1; i < nums.length - 1; i++) {
            if (i == 1) {
                memo2[i] = Math.max(memo2[i-1], nums[i]);
            }
            else {
                memo2[i] = Math.max(memo2[i-1], memo2[i-2] + nums[i]);
            }
        }

        // return
        return Math.max(memo[nums.length-1], memo2[nums.length-2]);
    }
}