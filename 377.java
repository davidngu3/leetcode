import java.util.*;

class Solution377 {
    public static void main(String[] args) {
        combinationSum4(new int[] {1, 2, 3}, 4);
    }

    public static int combinationSum4(int[] nums, int target) {
        int[] ret = new int[] { 0 };

        permute(nums, target, ret);
        return ret[0];
    }
    
    public static void permute(int[] nums, int target, int[] ret) {
        if (target == 0) {
            ret[0]++;
        }

        if (target > 0) {
            for (int z : nums) {
                permute(nums, target-z, ret);
            }
        }
    }
}