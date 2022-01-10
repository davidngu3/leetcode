import java.util.*;

class Solution118 {
    public static void main(String[] args) {
        generate(5);
    }

    public static List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ret = new ArrayList<List<Integer>>();

        // first row (base) initialization
        List<Integer> firstRow = new ArrayList<Integer>(Arrays.asList(1));
        ret.add(firstRow);

        for (int i = 1; i < numRows; i++) {
            List<Integer> row = new ArrayList<Integer>();
            List<Integer> prevRow = ret.get(i-1);
            
            // add leading one
            row.add(1);

            // calculate middle digits using sum of prev row
            for (int j = 0; j < i-1; j++) {
                row.add(prevRow.get(j) + prevRow.get(j+1));
            }

            // add trailing one
            row.add(1);

            // add completed row
            ret.add(row);
        }

        return ret;
    }
}