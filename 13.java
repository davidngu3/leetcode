import java.util.*;

class Solution13 {
    public static void main(String[] args) {
        System.out.println(romanToInt("LVIII"));
    }

    public static int romanToInt(String s) {
        HashMap<Character, Integer> roman = new HashMap<>();
        roman.put('I', 1);
        roman.put('V', 5);
        roman.put('X', 10);
        roman.put('L', 50);
        roman.put('C', 100);
        roman.put('D', 500);
        roman.put('M', 1000);

        ArrayList<Character> order = new ArrayList<>(Arrays.asList('I', 'V', 'X', 'L', 'C', 'D', 'M'));

        int res = 0;

        for (int i = 0; i < s.length(); i++) {
            // check special case
            if (!(i == s.length() - 1) && order.indexOf(s.charAt(i)) < order.indexOf(s.charAt(i+1))) {
                res += roman.get(s.charAt(i+1)) - roman.get(s.charAt(i));
                i++;
            }
            else {
                res += roman.get(s.charAt(i));
            }
        }

        return res;
    }
}