import java.util.*;

class Solution125 {
    public boolean isPalindrome(String s) {
        // filtered original string
        String a = s.replaceAll("[^A-Za-z0-9]", "");
        String b = a.toLowerCase();

        // edge case
        if (b.length() == 0 || b.length() == 1) {
            return true;
        }

        // reversed string
        String c = new StringBuilder(b).reverse().toString();

        return Objects.equals(b, c);
    }
}