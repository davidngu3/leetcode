import java.util.*;

class Solution20 {
    public static void main(String[] args) {
        System.out.println(isValid("{}(())"));
    }

    public static boolean isValid(String s) {
        // Create stack
        LinkedList<Character> stack = new LinkedList<>();

        for (char c : s.toCharArray()) {
            // if opening parentheses add to stack
            if ("([{".indexOf(c) >= 0) { 
                stack.addFirst(c);
            }
            // if closed parentheses check valid matching bracket, then pop from stack
            else { 
                if (c == '}' && !stack.peekFirst().equals('{')
                || c == ')' && !stack.peekFirst().equals('(')
                || c == ']' && !stack.peekFirst().equals('['))  {
                    return false;
                }
                stack.removeFirst();
            }
        }

        return stack.isEmpty();
    }
}