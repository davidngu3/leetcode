/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
class Solution206 {
    public boolean hasCycle(ListNode head) {
        
        // fast pointer goes 2x as fast as slow pointer
        // if fast and slow meet, there's a cycle
        // if either is null, no cycle
        
        ListNode fast = head;
        
        while (fast != null && head != null) {
            if (fast == null || fast.next == null || head == null) {
                return false;
            }
            
            // traverse pointers
            fast = fast.next.next;
            head = head.next;
            
            // check cycle condition
            if (fast == head) {
                return true;
            }    
            
            
        }
        
        // not hit
        return false;
    }
}