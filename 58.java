import java.util.*;

class Solution58 {
    public static void main(String[] args) {
        lengthOfLastWord("Hello World ");
    }

    public static int lengthOfLastWord(String s) {
        int i = s.length()-1;

        // go to first non-space char
        char[] arr = s.toCharArray();
        while (i >= 0 && arr[i] == ' ') {
            i--;
        }

        int counter = 0;

        // increment counter until next space or end of string
        while (i >= 0 && arr[i] != ' ') {
            counter++;
            i--;
        }


        return counter;
    }
}