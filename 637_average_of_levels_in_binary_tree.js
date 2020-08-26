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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var levels = {};
    
    // binary tree traversal, keeping track of level 
    var traverse = function(node, level) {
        if (!node) {
            return;
        }
        
        // add node val to level 
        if (levels.hasOwnProperty(level)) {
            levels[level].push(node.val);
        }
        else {
            levels[level] = [node.val];
        }
        
        // traverse left and right branch
        traverse(node.left, level+1);
        traverse(node.right, level+1);
    }
    
    traverse(root, 0);
    
    var ret = [];
    
    // calculate average for each level
    Object.keys(levels).forEach(level => {
        var length = levels[level].length;
        var sum = levels[level].reduce((acc, e) => acc + e, 0);
        ret.push(sum / length);
    })
    
    return ret;
};