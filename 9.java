import java.util.*;

class Solution {
    public static void main(String[] args) {
        isPalindrome(55255);
    }

    public static boolean isPalindrome(int x) {
        String xString = Integer.toString(x);
        StringBuilder sb = new StringBuilder(xString);
        String reversed = sb.reverse().toString();
        return Objects.equals(xString, reversed);
    }
}