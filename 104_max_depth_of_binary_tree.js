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
var maxDepth = function(root) {
    var depths = [];
    
    function traverse(node, depth) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            depths.push(depth)
            return;
        }
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }
    
    traverse(root, 1);
    return depths.length ? Math.max(...depths) : 0;
};