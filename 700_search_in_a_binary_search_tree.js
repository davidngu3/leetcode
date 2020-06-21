// Given the root node of a binary search tree (BST) and a value. 
// You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

// For example, 
// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3
// And the value to search: 2
// You should return this subtree:
//       2     
//      / \   
//     1   3

var searchBST = function(root, val) {
    // find target node, return null  if none found
    let targetNode = search(root, val);
    return targetNode;
};

function search(node, target) {
    if (node.val == target) {
        return node;
    }
    else if (node.val < target) {
        return search(node.right, target);
    }
    else if (node.val > target) {
        return search(node.left, target);
    }
}


