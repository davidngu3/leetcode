import java.util.*;

class Solution242 {
    public static void main(String[] args) {
        isAnagram("anagram", "nagaram");
    }

    public static boolean isAnagram(String s, String t) {
        // build frequency table for s
        int[] freq = new int[26];
        for (char c : s.toCharArray()) {
            int i = c - 'a';
            freq[i]++;
        }
        
        // deduct values in table for char in t
        for (char ch : t.toCharArray()) {
            int i = ch - 'a';
            freq[i]--;
        }
        
        // check if table is empty
        for (int j : freq) {
            if (j != 0) {
                return false;
            }
        }
        return true;
    }
}