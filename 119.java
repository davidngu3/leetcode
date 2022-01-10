import java.util.*;

class Solution119 {
    public static void main(String[] args) {
        getRow(5);
    }

    public static List<Integer> getRow(int rowIndex) {
        List<Integer> ret = new ArrayList<>();

        for (int n = 0; n <= rowIndex; n++) {
            List<Integer> curr = new ArrayList<>(ret);
            for (int i = 1; i < ret.size(); i++) {
                ret.set(i, curr.get(i) + curr.get(i-1));
            }

            ret.add(1);
        }

        return ret;
    }
}