import java.util.*;

class Solution57 {
    public static void main(String[] args) {
        int[][] intervals = new int[3][2];
        
        intervals[0] = new int[] {2, 5};
        intervals[1] = new int[] {6, 7};
        intervals[2] = new int[] {8, 9};
       
        int[] newInterval = new int[] {0, 1}; 
        insert(intervals, newInterval);
    }

    public static int[][] insert(int[][] intervals, int[] newInterval) {
        // array to hold solution intervals
        List<int[]> sol = new ArrayList<int[]>();

        boolean newIntervalPlaced = false;
        
        // build solution intervals
        for (int[] interval: intervals) {
            // new interval precedes entirely
            if (newInterval[1] < interval[0]) {
                if (!newIntervalPlaced) {
                    sol.add(newInterval);
                    newIntervalPlaced = true;
                }
                sol.add(interval);
            }

            // new interval succeeds entirely
            else if (interval[1] < newInterval[0]) {
                sol.add(interval);
            }

            // new interval overlap
            else {
                newInterval = new int[] { Math.min(newInterval[0], interval[0]), Math.max(newInterval[1], interval[1]) };
            }
        }
        
        if (!newIntervalPlaced) {
            sol.add(newInterval);
        }

        // convert return type
        int[][] ret = new int[sol.size()][2];
        for (int i = 0; i < sol.size(); i++) {
            ret[i] = sol.get(i);
        } 

        return ret;
    }
}