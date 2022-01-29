import java.util.*;

class Solution57 {
    public static void main(String[] args) {
        int[][] intervals = new int[2][2];
        
        intervals[0] = new int[] {1, 5};
       
        int[] newInterval = new int[] {1, 7}; 
        insert(intervals, newInterval);
    }

    public static int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> ret = new ArrayList<int[]>();
        int start = newInterval[0];
        int end = newInterval[1];
        
        // temp to hold new interval
        int[] curr = new int[2];
        boolean mergeInProcess = false;
        
        // iterate intervals, check condition
        for (int[] interval : intervals) {
            if (mergeInProcess) {
                // merge interval and continue
                if (interval[0] <= curr[1]) {
                    curr[1] = Math.max(curr[1], interval[1]);
                }
                
                // complete merge
                else {
                    ret.add(curr);
                    ret.add(interval);
                    mergeInProcess = false;
                }
            }
            
            else {
                // case 1: interval occurs entirely before 
                if (interval[1] < start) {
                    ret.add(interval);
                }
    
                // case 2: interval occurs entirely after
                else if (interval[0] > end) {
                    ret.add(interval);
                }
                
                // case 3 full coincidence
                else if (interval[0] <= start && interval[1] >= end) {
                    return intervals;
                }

                // case 4: end extension / merge
                else if (start <= interval[1] && interval[0] < start) {
                    curr[0] = interval[0];
                    curr[1] = end;
                    mergeInProcess = true; 
                }

                // case 5: start extension
                else if (start < interval[0] && end < interval[1]) {
                    curr[0] = start;
                    curr[1] = interval[1];
                    ret.add(curr);
                }
            }
        }

        // hanging merge
        if (mergeInProcess) {
            ret.add(curr);
        }
        
        // convert return to int[][] from arraylist
        int[][] sol = new int[ret.size()][2];
        for (int i = 0; i < ret.size(); i++) {
            sol[i] = ret.get(i);
        } 

        return sol;
            
    }
}