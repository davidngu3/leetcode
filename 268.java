class Solution268 {
    public static void main(String[] args) {
        
    }
    public static int missingNumber(int[] nums) {
        int ret = nums.length;

        for (int i = 0; i < nums.length; i++) {
            ret = ret ^ i ^ nums[i];
        }

        return ret;
    }
}