import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

import org.w3c.dom.Node;

// /**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     int val;
//  *     ListNode next;
//  *     ListNode() {}
//  *     ListNode(int val) { this.val = val; }
//  *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
//  * }
//  */

class Solution23 {
    public static void main(String[] args) {
        // list 1
        ListNode c = new ListNode(-2);
        ListNode b = new ListNode(-2, c);
        ListNode a = new ListNode(-1, b);
        
        // list 2
        ListNode f = null;

        // // list 3
        // ListNode i = new ListNode(14);
        // ListNode h = new ListNode(9, i);
        // ListNode g = new ListNode(1, h);
        
        ListNode[] input = new ListNode[] { a, f };
    
        mergeKLists(input);
    }
    
    public static ListNode mergeKLists(ListNode[] lists) {
        // add nodes directly to priority queue
        // create min heap
        PriorityQueue<ListNode> heap = new PriorityQueue<>(new Comparator<ListNode>() {
            public int compare(ListNode a, ListNode b) {
                return a.val - b.val;
            }
        });

        // insert all nodes into heap
        for (int i = 0; i < lists.length; i++) {
            ListNode list = lists[i];

            while (list != null) {
                heap.add(list);
                list = list.next;
            }
        }

        // pop the min node each time, and advance the pointer of its list
        ListNode merged = new ListNode();
        ListNode mergedHead = merged;

        while (!heap.isEmpty()) {
            // get min node
            ListNode popped = heap.poll();

            // add to merged list
            merged.next = popped;
            
            // advance pointers
            merged = merged.next;
        }

        // tie off end
        merged = null;

        return mergedHead.next;
    }
}
