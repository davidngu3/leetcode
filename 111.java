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
    public int minDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        return minDepthAux(root);
    }
    
    public int minDepthAux(TreeNode root) {
        if (root == null) {
            return 100001;        
        }
        
        if (root.left == null && root.right == null) {
            return 1;
        }

        return 1 + Math.min(minDepthAux(root.left), minDepthAux(root.right));
    }
}