import java.util.*;

class Solution49 {
    public static void main(String[] args) {
        groupAnagrams(new String[] {"eat","tea","tan","ate","nat","bat"});
    }
    public static List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> ret = new ArrayList<List<String>>();

        // group strings into buckets by their sorted value
        HashMap<String, List<Integer>> map = new HashMap<>();
        for (int i = 0; i < strs.length; i++) {
            char[] arr = strs[i].toCharArray();
            Arrays.sort(arr);
            String sorted = new String(arr);
            if (!map.containsKey(sorted)) {
                map.put(sorted, new ArrayList<Integer>());
            }
            map.get(sorted).add(i);
        }

        for (List<Integer> l : map.values()) {
            List<String> a = new ArrayList<String>();
            for (int j : l) {
                a.add(strs[j]);
            }
            ret.add(a);
        }

        return ret;
    }
}