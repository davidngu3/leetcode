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
        
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            head = head.next;
            
            // check cycle condition
            if (fast == head) {
                return true;
            }    
            
            
        }
        
        // fast hits null (end of list, so no cycle)
        return false;
    }
}