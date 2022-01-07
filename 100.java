class TreeNode100 {
    int val;
    TreeNode100 left;
    TreeNode100 right;
    TreeNode100() {}
    TreeNode100(int val) { this.val = val; }
    TreeNode100(int val, TreeNode100 left, TreeNode100 right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution100 {
    public boolean isSameTree(TreeNode100 p, TreeNode100 q) {
        if (p == null && q == null) {
            return true;
        }
        if (p == null || q == null) {
            return false;
        }
        
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}