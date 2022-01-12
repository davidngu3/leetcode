class Solution152 {
    public static void main(String[] args) {
        System.out.println(maxProduct(new int[]{ 2, 3, 0, 7, -3, 8, -2, 4})); // should be 6
    }

    public static int maxProduct(int[] nums) {
        int max = Integer.MIN_VALUE;
        int curr = 1;
        
        // calculate best product from the left
        curr = 1;
        for (int i = 0; i < nums.length; i++) {
            curr *= nums[i];
            max = Math.max(curr, max);

            if (nums[i] == 0) {
                curr = 1;
            }
        }

        // calculate best product from the right
        curr = 1;
        for (int i = nums.length-1; i >= 0; i--) {
            curr *= nums[i];
            max = Math.max(curr, max);

            if (nums[i] == 0) {
                curr = 1;
            }
        }

        return max;
    }
}