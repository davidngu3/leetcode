// strategy:
// XOR all numbers 0 to n with all elements in the array
// e.g. [3, 0, 1]
// perform 0 ^ 1 ^ 2 ^ 3 ^ 3 ^ 0 ^ 1
// duplicate elements cancel out i.e. a ^ a = 0
// so we will be left with the element that does not appear twice (2)

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