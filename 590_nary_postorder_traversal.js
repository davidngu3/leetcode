// Given an n-ary tree, return the postorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 /**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var out = [];

    function traverse(node) {
        if (!node) {
            return;
        }

        for (let i=0; i<node.children.length; i++) {
            traverse(node.children[i]);
        }
        out.push(node.val);
    }

    traverse(root);
    return out;
};
