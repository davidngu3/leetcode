// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

// Example 1:
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    
    var search = function(node, L, R) {
        if (node == null) { // base case: null node
            return;
        }
        if (L <= node.val && node.val <= R) { 
            result += node.val;
        }
        if (L < node.val) { 
            search(node.left, L, R);
        } 
        if (node.val < R) { 
            search(node.right, L, R);
        }  
    }

    var result = 0;
    search(root, L, R);
    return result;
};

// NOTE: this implementation will only work on the leetcode server as they have an interally defined TreeNode class