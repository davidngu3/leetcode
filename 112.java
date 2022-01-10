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
class Solution112 {
    public static void main(String[] args) {
        TreeNode root = TreeNode.createTreeNodeFromArray(new ArrayList<Integer>(Arrays.asList(5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1)));
        hasPathSum(root, 22);
    }

    public static boolean hasPathSum(TreeNode root, int targetSum) {
        return nodeLeafSum(root, targetSum, 0);
    }
    
    public static boolean nodeLeafSum(TreeNode root, int targetSum, int currSum) {
        if (root == null) {
            return false;
        }
        
        currSum += root.val;
        
        if (root.left == null && root.right == null) {
            return currSum == targetSum;
        }
        
        return nodeLeafSum(root.left, targetSum, currSum) || nodeLeafSum(root.right, targetSum, currSum);
    }
}