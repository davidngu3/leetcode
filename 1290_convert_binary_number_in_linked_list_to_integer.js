// Given head which is a reference node to a singly-linked list. 
// The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.

// Example 1:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

// Constraints:
// The Linked List is not empty.
// Number of nodes will not exceed 30.
// Each node's value is either 0 or 1.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    var currentNode = head;
    let result = 0;
    
    while (currentNode) {
        result = result*2 + currentNode.val
        currentNode = currentNode.next;
    }

    return result;
};
