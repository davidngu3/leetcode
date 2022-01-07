class Solution108 {
    public static void main(String[] args) {
        sortedArrayToBST(new int[]{-10, -3, 0, 5, 9});
    }

    public static TreeNode108 sortedArrayToBST(int[] nums) {
        int m = nums.length / 2;
        int mid = nums[m];

        TreeNode108 root = new TreeNode108(mid);

        int i = m - 1;
        TreeNode108 lower = root;
        while (i >= 0) {
            lower.left = new TreeNode108(nums[i]);
            i--;
            lower = lower.left;
        }

        int j = nums.length - 2;

        root.right = new TreeNode108(nums[nums.length - 1]);
        TreeNode108 upper = root.right;

        while (j > m) {
            upper.left = new TreeNode108(nums[j]);
            j--;
            upper = upper.left;
        }

        return root;
    }
}

class TreeNode108 {
    int val;
    TreeNode108 left;
    TreeNode108 right;

    TreeNode108() {
    }

    TreeNode108(int val) {
        this.val = val;
    }

    TreeNode108(int val, TreeNode108 left, TreeNode108 right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

