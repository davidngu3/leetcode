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
        return createNodeHelper(arr, 0);
    }

    private static TreeNode createNodeHelper(List<Integer> arr, int i) {
        return new TreeNode(arr.get(i), createNodeHelper(arr, i*2+1), createNodeHelper(arr, i*2+2));
    }

    public static void print(TreeNode root) {
        LinkedList<TreeNode> queue = new LinkedList<>();
        queue.addLast(root);

        while (!queue.isEmpty()) {
            TreeNode popped = queue.removeFirst();
            if (popped == null) {
                System.out.println("null");
            }
            else {
                System.out.println(popped.val);
            }

            queue.addLast(popped.left);
            queue.addLast(popped.right);
        }
    }
}