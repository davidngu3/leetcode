import java.util.*;

class Solution1 {
    public int[] twoSum(int[] nums, int target) {
        int[] ret = new int[2];
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(target-nums[i])) {
                return ret = new int[]{ i, map.get(target-nums[i]) };
            }
            else if (!map.containsKey(nums[i])) {
                map.put(nums[i], i);
            }
        }
        
        return ret;
    }
}