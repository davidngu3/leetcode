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
        threeSum(new int[]{ -1, 0, 1, 2, -1, -4 });
        System.out.println("hello");
    }

    public static List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ret = new ArrayList<>();
        
        return ret;
    }
}