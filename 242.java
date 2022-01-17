import java.util.*;

class Solution242 {
    public static void main(String[] args) {
        isAnagram("anagram", "nagaram");
    }

    public static boolean isAnagram(String s, String t) {
        // build frequency hashmap for s
        HashMap<Character, Integer> map = new HashMap<>();
        for (char c : s.toCharArray()) {
            if (!map.containsKey(c)) {
                map.put(c, 0);
            }
            map.put(c, map.get(c) + 1);
        }
        
        // deduct values in hashmap for char in t
        for (char ch : t.toCharArray()) {
            if (!map.containsKey(ch)) {
                return false;
            }
            map.put(ch, map.get(ch) - 1);
            if (map.get(ch) <= 0) {
                map.remove(ch);
            }
        }
        
        // check if s is empty
        return map.isEmpty();
    }
}