// Given an n-ary tree, return the preorder traversal of its nodes' values.

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    // array for storing output
    const arr = [];
    
    // recursive function
    function traverse(node) {
        if (!node) {
            return;
        }
        // push the value before recursive calls for preorder
        arr.push(node.val);     
        for (let i=0; i<node.children.length; i++) {
          traverse(node.children[i]);  
        }    
    }
    
    traverse(root);
    return arr;
};
 