class Solution153 {
    // input: sorted array ascending order, unique
    public static void main(String[] args) {
        System.out.println(findMin(new int[] {5, 1}));
    }

    public static int findMin(int[] nums) {
        int n = nums.length;

        // edge case: one element or list is not rotated
        if (nums.length == 1 || nums[0] < nums[n-1]) {
            return nums[0];
        }

        // binary search
        int l = 0;
        int r = nums.length - 1;

        while (l <= r) {
            int m = l + (r - l)/2;

            // note: we checked before that target is not index 0, so discard if m is 0
            // target is the element which is less than the previous number
            if (m != 0 && nums[m] < nums[m-1]) {
                return nums[m];
            }

            if (nums[m] > nums[r]) {
                l = m+1;
            }
            else { // nums[m] < nums[r]
                r = m-1;
            }
        }
    
        return Integer.MIN_VALUE;
    }
}