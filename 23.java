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
class Solution23 {
    public ListNode mergeKLists(ListNode[] lists) {
        // same as merge 2, but need to find the min element in all K lists
        // to find min, may be best to use a min heap, extract min
        // in heap, must store the value, array and index in array, then sort by value, arbritrarily break ties
        
    }
}