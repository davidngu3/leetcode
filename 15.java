import java.util.*;

/*
strategy:
    store a hashmap 
        key = positive pair sums
        val = [[i, j]]

    iterate input, for each index k, check if -nums[k] is in hashmap, if so,
        add [i, j, k] to return for each pair i, j in [[i, j]]

*/

class Solution15 {
    public static void main(String[] args) {
        threeSum(new int[]{ 0, 0, 0, 0 });
    }

    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ret = new ArrayList<>();

        if (nums.length == 0) {
            return ret;
        }

        // sort the array
        Arrays.sort(nums);

        int i = 0;
        while (nums[i] <= 0 && i < nums.length - 2) {
            // find first non duplicate
            if (i != 0) {
                while (i < nums.length - 2 && nums[i] == nums[i-1]) {
                    i++;
                }
            }

            int left = i + 1;
            int right = nums.length - 1;

            while (left < right) {
                int sum = nums[left]  + nums[right] + nums[i];
                
                if (sum ==0) {
                    ret.add(Arrays.asList(nums[left], nums[i], nums[right]));
                    
					// Notice that the solution set must not contain duplicate triplets.
                    // So skipped duplicate items from left and right.
                    while (left < right && nums[left] == nums[left + 1]) { left++; }
                    while (left < right && nums[right] == nums[right - 1]) { right--; }
                    
                    left++;
                    right--;
                    
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
            i++;
        }
        
        return ret;
    }
}