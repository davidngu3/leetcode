class Solution108 {
    public static void main(String[] args) {
        System.out.println("hi");
    }

    public static TreeNode108 sortedArrayToBST(int[] nums) {
        int mid = nums[nums.length / 2];

        TreeNode108 root = new TreeNode108(mid);

        int i = mid - 1;
        TreeNode108 lower = root;
        while (i >= 0) {
            lower.left = new TreeNode108(nums[i]);
            i--;
        }

        int j = nums.length - 2;

        root.right = new TreeNode108(nums[nums.length - 1]);
        TreeNode108 upper = root.right;

        while (j > nums.length / 2) {
            upper.left = new TreeNode108(nums[j]);
            j--;
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

