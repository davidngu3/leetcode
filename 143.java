/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution143 {
    public static void main(String[] args) {
        ListNode a = new ListNode(1);
        ListNode b = new ListNode(2);
        ListNode c = new ListNode(3);
        ListNode d = new ListNode(4);
        ListNode e = new ListNode(5);
        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;

        reorderList(a);
    }

    public static void reorderList(ListNode head) {
        // split the list in half
        ListNode fast = head;
        ListNode slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        
        // slow now pointing to halfway node
        // reverse the second half
        ListNode prev = null;
        ListNode curr = slow;
        
        while (curr != null) {
            ListNode temp =  curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        
        // prev now pointing to final node
        // interlace the two halves
        ListNode firstHalf = head;
        ListNode secondHalf = prev;
        ListNode merged = new ListNode(0);
        ListNode mergedHead = merged;
        
        boolean flag = true;

        while (firstHalf != null && secondHalf != null) {
            // take from first half
            if (flag) {
                merged.next = firstHalf;
                firstHalf = firstHalf.next;
                merged = merged.next;
            }
            // take from second half
            else {
                merged.next = secondHalf;
                secondHalf = secondHalf.next;
                merged = merged.next;
            }
            flag = !flag;
        }

        head = mergedHead.next;
    }
}