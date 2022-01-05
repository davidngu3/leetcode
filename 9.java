import java.util.*;

class Solution {
    public static void main(String[] args) {
        System.out.println(isPalindromeNoConversion(55));
    }

    public static boolean isPalindrome(int x) {
        String xString = Integer.toString(x);
        StringBuilder sb = new StringBuilder(xString);
        String reversed = sb.reverse().toString();
        return Objects.equals(xString, reversed);
    }

    public static boolean isPalindromeNoConversion(int x) {
        if (x < 0) {
            return false;
        }

        // build the reverse of x by taking mod and dividing
        int reversed = 0;
        int original = x;
        while (original != 0) {
            reversed = reversed * 10 + original % 10;
            original = original / 10;
        }
        
        return Integer.compare(x, reversed) == 0;
    }
}