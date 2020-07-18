/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let listLength = 0;
    let currentNode = head;
    while (currentNode !== null) {
        ++listLength;
        currentNode = currentNode.next;
    }
    
    let middle = Math.ceil((listLength+1)/2);
    
    currentNode = head;
    for (let i=1; i<middle; ++i) {
        currentNode = currentNode.next;
    } 
    
    return currentNode;
};