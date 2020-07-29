/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumRootToLeaf = function(root) {
    var bitArray = [];
    
    const traverse = (node, bits) => {
        // endpoint: node reaches end of a branch, alternatively add conditional checks for traversal
        if (node == null) {
            return;
        }
        
        var binary = `${bits}${node.val}`;
        // condition of writing data
        if (node.left === null && node.right === null) {
            bitArray.push(binary);
        }
        
        traverse(node.left, binary);
        traverse(node.right, binary);
    }
    
    traverse(root, '');
    return bitArray.reduce((acc, cur) => acc + parseInt(cur, 2), 0);
};

