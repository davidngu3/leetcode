class Solution206 {
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
    
        reverseList(a);    
    }

    public static ListNode reverseList(ListNode head) {
        // edge cases
        if (head == null || head.next == null) {
            return head;
        }
        
        // set up pointers
        ListNode curr = head;
        ListNode prev = null; 
        
        // reverse links iteratively
        while (curr != null) {
            // continuation point
            ListNode temp = curr.next;
            
            // reverse link
            curr.next = prev;
            
            // shift pointers
            prev = curr;
            curr = temp;
        }
        
        return prev;
    }
}