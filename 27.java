class Solution27 {
    public static void main(String[] args) {
        removeElement(new int[] {6, 5, 2, 2, 3, 2, 5}, val)
    }
    public static int removeElement(int[] nums, int val) {
        int i = 0;
        int p = 0;

        while (p < nums.length) {
            if (nums[p] >= 0) {
                int candidate = nums[p];
                for (int j = p + 1; j < nums.length; j++) {
                    if (Integer.compare(candidate, nums[j]) == 0) {
                        nums[j] = -1;
                    }
                }
                nums[p] = -1;
                nums[i] = candidate;
                i++;
            }
            p++;
        }

        
        return i;
    }
}