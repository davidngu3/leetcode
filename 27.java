class Solution27 {
    public static void main(String[] args) {
        removeElement(new int[] {6, 5, 2, 2, 3, 2, 5}, 2);
    }
    public static int removeElement(int[] nums, int val) {
        int p = 0; // where to put next element
        
        for (int i = 0; i < nums.length; i++) {
            if (!(Integer.compare(nums[i], val) == 0)) {
                nums[p] = nums[i];
                p++;
            }
        }

        return p;
    }
}