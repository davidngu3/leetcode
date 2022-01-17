import java.util.HashMap;

class Solution424 {
    public static void main(String[] args) {
        System.out.println(characterReplacement("ABAB", 2)); // expected 6
    }

    public static int characterReplacement(String s, int k) {
        char[] chars = s.toCharArray();

        HashMap<Character, Integer> map = new HashMap<>(); // <char, frequency>

        int i = 0;
        int maxLength = 0;
        int maxRepeat = 0;

        for (int j = 0; j < s.length(); j++) {
            char c = chars[j];
            // add new char to map
            if (!map.containsKey(c)) {
                map.put(c, 0);
            } 
            map.put(c, map.get(c) + 1);

            // update max repeats (NOTE: update when new char frequency BEATS historical max)
            maxRepeat = Math.max(maxRepeat, map.get(c));
        
            // if condition doesnt hold, shift left pointer
            if ((j - i + 1) - maxRepeat > k) {
                map.put(chars[i], map.get(chars[i]) - 1);
                i++;
            } 
            
            // update max window length
            maxLength = Math.max(maxLength, j - i + 1);
        }

        return maxLength;
    }

}