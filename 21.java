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
class Solution21 {
    // NOTE: we can avoid O(N) space from new list by using a pointer.
    public static void main(String[] args) {
        ListNode21 a = new ListNode21(1);
        ListNode21 b = new ListNode21(2);
        ListNode21 c = new ListNode21(4);
        a.next = b;
        b.next = c;

        ListNode21 d = new ListNode21(1);
        ListNode21 e = new ListNode21(3);
        ListNode21 f = new ListNode21(4);
        ListNode21 g = new ListNode21(7);
        ListNode21 h = new ListNode21(8);
        d.next = e;
        e.next = f;
        f.next = g;
        g.next = h;

        mergeTwoLists(a, d);
    }
    public static ListNode21 mergeTwoLists(ListNode21 list1, ListNode21 list2) {
        ListNode21 merged = new ListNode21();
        ListNode21 mergedHead = merged;

        while (list1 != null && list2 != null) {
            if (Integer.compare(list1.val, list2.val) <= 0) { 
                merged.next = new ListNode21(list1.val);
                list1 = list1.next;
            }
            else {
                merged.next = new ListNode21(list2.val);
                list2 = list2.next;
            }
            merged = merged.next;
        }

        // append the remaining list
        ListNode21 rem = list1 == null ? list2 : list1;
        merged.next = rem;

        return mergedHead.next;
    }
}

class ListNode21 {
    int val;
    ListNode21 next;
    ListNode21() {}
    ListNode21(int val) { this.val = val; }
}
