import java.util.HashMap;

class Solution424 {
    public static void main(String[] args) {
        System.out.println(characterReplacement("MJSDSSMESSTR", 2)); // expected 6
    }

    public static int characterReplacement(String s, int k) {
        int i = 0;
        int j = 0;
        int maxLength = 0;
        
        char[] chars = s.toCharArray();
        HashMap<Character, Integer> map = new HashMap<>(); // <char, frequency>
        while (j < s.length()) {
            
            // add char to map
            if (!map.containsKey(chars[j])) {
                map.put(chars[j], 1);
            }
            else {
                map.put(chars[j], map.get(chars[j])+1);
            }
            
            // check condition holds for any char
            boolean cond = false;
            for (char key : map.keySet()) {
                if ((j-i+1) - map.get(key) <= k) {
                    cond = true;
                }
            }

            // shift left pointer if condition doesnt hold
            if (!cond) {
                char curr = chars[i]; // char to transition from

                while (chars[i] == curr) {
                    map.put(curr, map.get(curr) - 1);
                    i++;
                }
                
                if (map.get(curr) <= 0) {
                    map.remove(curr);
                }
            }
            
            // shift right pointer and update max
            maxLength = Math.max(maxLength, j - i + 1);
            j++;
        }

        return maxLength;
    }

}