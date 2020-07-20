var isUnivalTree = function(root) {
    var unival = root.val;
    return check(root, unival);
    
}

function check(node, unival) {
    if (!node) {
        return true;
    }
    return node.val === unival && 
        check(node.left, unival) &&
        check(node.right, unival);
}