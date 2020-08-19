/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var sequence1 = generateSequence(root1);
    var sequence2 = generateSequence(root2);
    
    return equals(sequence1, sequence2);
};


var equals = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    
    return true;
}


var generateSequence = function(node) {
    var leafSequence = [];
    
    var traverse = function(node) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            leafSequence.push(node.val);
        }
        
        traverse(node.left);
        traverse(node.right);
    }
    
    traverse(node);
    
    return leafSequence;
}