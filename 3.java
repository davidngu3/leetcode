import java.util.*;

class Solution3 {
    public static void main(String[] args) {
        System.out.println( lengthOfLongestSubstring("asdgs d2@giabcdefghij"));
       
    }

    public static int lengthOfLongestSubstring(String s) {
        if (s.length() == 0 || s.length() == 1) {
            return s.length();
        }

        char[] chars = s.toCharArray();
        HashMap<Character, Integer> map = new HashMap<>();

        int i = 0; 
        int j = 0;

        map.put(chars[i], 0);
        int longest = 1;

        while (j < s.length() - 1) {
            j++;

            // put char in map
            if (!map.containsKey(chars[j]) || map.get(chars[j]) < i) {
                map.put(chars[j], j);
                // update longest substring
                int currLen = j - i + 1;
                longest = Math.max(longest, currLen);
            }
            else {
                // duplicate found, shift left pointer to the right of the initial occurrence
                i = map.get(chars[j]) + 1;
                map.put(chars[j], j);
            }
        }

        return longest;
    }
}