import java.util.*;

/*
    Strategy: send a fast pointer n-1 nodes ahead
    Delete the nth last node using the slow pointer position

    delete n = 2nd last node
    D -> () -> () -> ()

    slow = head
    fast = 3rd node(2 ahead)
    iterate until fast = null
    now slow = 1st node, fast = null
    delete the next node after slow

*/

class Solution19 {
    public static void main(String[] args) {
        
    }

    public static ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0, head);

        ListNode fast = dummy;
        ListNode slow = dummy;

        // advanced fast n+1 times
        for (int i = 0; i <= n; i++) {
            fast = fast.next;
        }

        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;

        return dummy.next;    
    }
}