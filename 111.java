import java.util.*;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int minDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        Deque<NodeWithHeight> queue = new LinkedList<NodeWithHeight>();
        int currHeight = 1;
        queue.addLast(new NodeWithHeight(root, currHeight));
        
        while (!queue.isEmpty()) {
            NodeWithHeight curr = queue.removeFirst();
            
            if (curr.node.left == null && curr.node.right == null) {
                return curr.height;
            }
            
            if (root.left != null) { 
                queue.addLast(new NodeWithHeight(root.left, currHeight + 1)); 
            }
            if (root.right != null) {
                queue.addLast(new NodeWithHeight(root.right, currHeight + 1));
            }
        }
        
        return -1;
    }a
}

class NodeWithHeight {
    int height;
    TreeNode node;
    
    public NodeWithHeight(TreeNode node, int height) {
        this.node = node;
        this.height = height;
    }
}