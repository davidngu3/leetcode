import java.util.*;

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    public static TreeNode createTreeNodeFromArray(List<Integer> arr) {
        return createNodeHelper(arr, 0, (arr.size()-2) / 2);
    }

    private static TreeNode createNodeHelper(List<Integer> arr, int i, int max) {
        if (arr.get(i) == null) {
            return null;
        }
        if (i > max) {
            return new TreeNode(arr.get(i));
        }
        return new TreeNode(arr.get(i), createNodeHelper(arr, i*2+1, max), createNodeHelper(arr, i*2+2, max));
    }
}