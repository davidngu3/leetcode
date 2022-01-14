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
        
        // add all pairs to a map
        HashMap<Integer, List<List<Integer>>> pairs = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            for (int j = i+1; j < nums.length; j++) {
                if (nums[i] + nums[j] >= 0) {
                    if (!pairs.containsKey(nums[i] + nums[j])) {
                        pairs.put(nums[i] + nums[j], new ArrayList<List<Integer>>());
                    }
                    pairs.get(nums[i] + nums[j]).add(new ArrayList<Integer>(Arrays.asList(nums[i], nums[j])));
                }
            }
        }

        // find complement negatives from input
        for (int k = 0; k < nums.length; k++) {
            if (nums[k] <= 0 && pairs.containsKey(nums[k] * -1)) {
                List<List<Integer>> validTriplets = pairs.get(-nums[k]);
                for (List<Integer> trip : validTriplets) {
                    if (nums[k] !=  trip.get(0) && nums[k] != trip.get(1)) { // k is not one of them
                        List<Integer> ans = new ArrayList<>(trip); // add triplet to return
                        ans.add(nums[k]);
                        ret.add(trip);
                    }
                }
            }
        }

        return ret;
    }
}