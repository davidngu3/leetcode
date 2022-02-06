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
        ListNode c = new ListNode(6);
        ListNode b = new ListNode(5, c);
        ListNode a = new ListNode(2, b);
        
        // list 2
        ListNode f = new ListNode(10);
        ListNode e = new ListNode(7, f);
        ListNode d = new ListNode(3, e);

        // list 3
        ListNode i = new ListNode(14);
        ListNode h = new ListNode(9, i);
        ListNode g = new ListNode(1, h);
        
        ListNode[] input = new ListNode[] { a, d, g };
    
        mergeKLists(input);
    }
    public static ListNode mergeKLists(ListNode[] lists) {
        // same as merge 2, but need to find the min element in all K lists
        // to find min, may be best to use a min heap, extract min
        // in heap, list index and value , arbritrarily break ties
        
        // amortized O(1) insertion, O(N) time, N is number of elements

        // create min heap
        PriorityQueue<NodeData> heap = new PriorityQueue<>(new Comparator<NodeData>() {
            public int compare(NodeData a, NodeData b) {
                return a.val - b.val;
            }
        });

        // insert all nodes into heap
        for (int i = 0; i < lists.length; i++) {
            ListNode list = lists[i];

            while (list != null) {
                heap.add(new NodeData(i, list.val));
                list = list.next;
            }
        }

        // pop the min node each time, and advance the pointer of its list
        ListNode merged = new ListNode();
        ListNode mergedHead = merged;

        while (!heap.isEmpty()) {
            // get min node
            NodeData popped = heap.poll();

            // add to merged list
            merged.next = lists[popped.listIndex];
            
            // advance pointers
            merged = merged.next;
            lists[popped.listIndex] = lists[popped.listIndex].next;
        }

        return mergedHead.next;
    }
}

class NodeData {
    int listIndex;
    int val;

    public NodeData(int listIndex, int val) {
        this.val = val;
        this.listIndex = listIndex;  
    }
}