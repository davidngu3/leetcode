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

class Solution111 {
    public static void main(String[] args) {
        TreeNode ex = TreeNode.createTreeNodeFromArray(new ArrayList<Integer>(Arrays.asList(0, 2, 4, 1, null, 3, -1, 5, 1, null, null, null, 6, null, 8)));

        minDepth(ex);
    }

    public static int minDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        Deque<NodeWithHeight> queue = new LinkedList<NodeWithHeight>();
        queue.addLast(new NodeWithHeight(root, 1));
        
        while (!queue.isEmpty()) {
            NodeWithHeight curr = queue.removeFirst();
            
            if (curr.node.left == null && curr.node.right == null) {
                return curr.height;
            }
        
            if (curr.node.left != null) { 
                queue.addLast(new NodeWithHeight(curr.node.left, curr.height + 1)); 
            }
            if (curr.node.right != null) {
                queue.addLast(new NodeWithHeight(curr.node.right, curr.height + 1));
            }
        }
        
        return -1;
    }
}

class NodeWithHeight {
    int height;
    TreeNode node;
    
    public NodeWithHeight(TreeNode node, int height) {
        this.node = node;
        this.height = height;
    }
}