class Solution53 {
    public static void main(String[] args) {
        maxSubArray(new int[] {-2, 1, -3, 4, -1, 2, 1, -5, 4});
    }

    public static int maxSubArray(int[] nums) {
        int bestSum = Integer.MIN_VALUE;
        int currSum = 0;
        
        for (int i = 0; i < nums.length; i++) {
            currSum += nums[i];    
            bestSum = Math.max(currSum, bestSum);
            
            if (currSum < 0) {
                currSum = 0;
            }
        }
    
        return bestSum;
    }
}