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
var reverseList = function(head) {
    var stack = [];
    
    while (head) {
        stack.push(head.val);
        head = head.next;
    }
    
    var ret = new ListNode(undefined, undefined);
    var nextNode = ret;
    
    while (stack.length > 0) {
        var nextVal = stack.pop();
        nextNode.next = new ListNode(nextVal);
        nextNode = nextNode.next;
    }
    
    return ret.next;
};