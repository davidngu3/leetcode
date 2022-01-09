class Solution108 {
    public static void main(String[] args) {
        sortedArrayToBST(new int[]{-10, -3, 0, 5, 9});
    }

    public static TreeNode108 sortedArrayToBST(int[] nums) {
        return addToBST(nums, 0, nums.length-1);
    }

    public static TreeNode108 addToBST(int[] nums, int left, int right) {
        if (left > right) {
            return null;
        }

        int m = left + (right - left)/2;

        return new TreeNode108(nums[m], addToBST(nums, left, m-1), addToBST(nums, m+1, right));
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

