class Solution300 {
    public static void main(String[] args) {
        lengthOfLIS(new int[] {1, 3, 5, 6, 9, 4, 10, 5, 6});
    }

    public static int lengthOfLIS(int[] nums) {
        if (nums.length == 0 || nums.length == 1) {
            return nums.length;
        }

        // memo[i] represents the len of longest subsequence from 0 to i including i
        int[] memo = new int[nums.length];

        for (int i = 0; i < nums.length; i++) {
            // base case: longest subsequence of single integer is 1
            memo[i] = 1;
            for (int j = i-1; j >= 0; j--) {
                if (nums[j] < nums[i]) { 
                    memo[i] = Math.max(memo[j] + 1, memo[i]); 
                }
            }
        }

        // get max value in memo array
        int ret = 0;
        for (int i : memo) {
            ret = Math.max(i, ret);
        }

        return ret;
    }
}