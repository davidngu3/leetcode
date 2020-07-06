// Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

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
 * @return {TreeNode}
 */

// we can do an in-order traversal to get the desired result (root, left, right);

var increasingBST = function(root) {
    let vals = [];
    inorder(root, vals);
    let ans = new TreeNode(0);
    cur = ans;
    
    vals.forEach(val => {
        cur.right = new TreeNode(val);
        cur = cur.right;
    } )
    return ans.right;
    
};

const inorder = function(node, vals) {
    if (node == null) return;
    inorder(node.left, vals);
    vals.push(node.val);
    inorder(node.right, vals);
}