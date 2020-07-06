// Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    // start with a fake new root to connect the rest and 
    // assign a pointer cur to keep track of the root of the new tree
    const newRoot = new TreeNode(undefined);
    let cur = newRoot;
    
    // traversal function; difference from regular traversal: instead of inorder(left), append root to array, inorder(right)
    // instead: inorder(left), add root to new tree and update root of new tree (relink), inorder(right);
    const inorder = node => {
        if (node === null) {
            return;
        }
        inorder(node.left);
        // for current node, we want to only link the node to the right
        node.left = null;
        cur.right = node;
        // reassign node to cur for the next operation
        cur = node;
        inorder(node.right);
    }
    inorder(root)
    return newRoot.right;
};