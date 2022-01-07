class Solution35 {
    public static void main(String[] args) {
        System.out.println(searchInsert(new int[] {1, 2, 3, 5, 6}, 4));
    }

    public static int searchInsert(int[] nums, int target) {
        int L = 0;
        int R = nums.length-1;

        if (target > nums[nums.length - 1])  {
            return nums.length;
        }

        while (L <= R) {
            int M = L + (R-L)/2;
            
            // special case: target fits right between 2 indices
            if (Integer.compare(nums[M], target) < 0) {
                L = M+1;
            }
            else if (Integer.compare(nums[M], target) > 0) {
                R = M-1;
            }
            else { // M == target
                return M;
            }
        }

        return L;
    }
}