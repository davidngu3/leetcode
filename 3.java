import java.util.*;

class Solution3 {
    public static void main(String[] args) {
        System.out.println( lengthOfLongestSubstring("abcabcbb"));
       
    }

    public static int lengthOfLongestSubstring(String s) {
        if (s.length() == 0 || s.length() == 1) {
            return s.length();
        }

        char[] chars = s.toCharArray();
        HashMap<Character, Integer> map = new HashMap<>();

        int i = 0; 
        int j = 0;

        map.put(chars[i], 1);
        int longest = 1;

        while (j < s.length() - 1) {
            j++;

            // put char in map
            if (!map.containsKey(chars[j])) {
                map.put(chars[j], 1);
            }
            else {
                map.put(chars[j], map.get(chars[j]) + 1);

                // duplicate found, shift left pointer until no more
                while (map.get(chars[j]) > 1) {
                    // decrement/remove char at i from map
                    map.put(chars[i], map.get(chars[i]) - 1);
                    if (map.get(chars[i]) <= 0) {
                        map.remove(chars[i]);
                    }
                    i++;
                }
            }
            
            // update longest substring
            int currLen = j - i + 1;
            longest = Math.max(longest, currLen);
        }

        return longest;
    }
}