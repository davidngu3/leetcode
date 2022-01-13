import java.util.*;

/*
strategy:
    store a hashmap key = pair sums, val = [i, j]

    iterate array for k, check if -nums[k] is in hashmap, if so,
        check k is not one of the values
            if not: add [i, j, k] to return

        problem: this will produce duplicates
            so: when pair [i,j] is processed, remove it from the hashmap

*/

class Solution15 {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ret = new ArrayList<>();
        


        return ret;
    }
}