import java.util.*;

class Solution {
    public int[][] merge(int[][] intervals) {
        // sort input by start value
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        
        // holds solution intervals
        List<int[]> sol = new ArrayList<>();
        
        // holds interval being built
        int[] curr = intervals[0];
        
        for (int i = 1; i < intervals.length; i++) {
            int[] interval = intervals[i];
            
            // intervals to be merged
            if (interval[0] <= curr[1]) {
                curr[1] = Math.max(interval[1], curr[1]);
            }
            
            // interval gap
            else {
                sol.add(curr);
                curr = interval;
            }
        }
        
        // hanging interval
        sol.add(curr);
        
        return sol.toArray(new int[sol.size()][]);
    }
}