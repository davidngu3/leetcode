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
        
        Deque<TreeNode> queue = new LinkedList<TreeNode>();
        queue.addLast(root);
        
        int depth = 1;
        while (!queue.isEmpty()) {
            int nodesInLayer = queue.size();

            while (nodesInLayer > 0) {
                TreeNode curr = queue.removeFirst();
                nodesInLayer--;

                if (curr.left == null && curr.right == null) {
                    return depth;
                }
            
                if (curr.left != null) { 
                    queue.addLast(curr.left); 
                }
                if (curr.right != null) {
                    queue.addLast(curr.right);
                }
            }
            
            depth++;
        }
        
        return -1;
    }
}
