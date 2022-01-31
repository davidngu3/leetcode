import java.util.*;

class Solution435 {
    public static void main(String[] args) {
        int[][] intervals = new int[5][2];
        intervals[0] = new int[] {0, 2};
        intervals[1] = new int[] {1, 3};
        intervals[2] = new int[] {2, 4};
        intervals[3] = new int[] {3, 5};
        intervals[4] = new int[] {4, 6};
        eraseOverlapIntervals(intervals);   
    }

    public static int eraseOverlapIntervals(int[][] intervals) {
        // store the solution
        int intervalsRemoved = 0;

        // sort the array
        Arrays.sort(intervals, new Comparator<int[]>() {
            public int compare(int[] a, int[] b) {
                return a[0] - b[0];
            }
        });
        
        // edge cases
        if (intervals.length == 0 || intervals.length == 1) {
            return 0;
        }

        // set up pointers
        int prev = 0;
        int curr = 1;

        // iteration
        while (curr < intervals.length) {
            int[] prevInterval = intervals[prev];
            int[] currInterval = intervals[curr];

            // if no overlap
            if (currInterval[0] >= prevInterval[1]) {
                prev = curr;
                curr++;
            }
            
            // if overlap && curr ends later
            else if (currInterval[1] >= prevInterval[1]) {
                curr++;
                intervalsRemoved++;
            }   

            // if overlap && prev ends later
            else {
                prev = curr;
                curr++;
                intervalsRemoved++;
            }
        }

        return intervalsRemoved;
    }
}