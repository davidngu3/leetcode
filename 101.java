
class TreeNode101 {
    int val;
    TreeNode101 left;
    TreeNode101 right;

    TreeNode101() {
    }

    TreeNode101(int val) {
        this.val = val;
    }

    TreeNode101(int val, TreeNode101 left, TreeNode101 right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution101 {
    public boolean isSymmetric(TreeNode101 root) {
        return isSymmetricAux(root.left, root.right);
    }

    public boolean isSymmetricAux(TreeNode101 a, TreeNode101 b) {
        if (a == null && b == null) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }

        if (a.val != b.val) {
            return false;
        }
        return isSymmetricAux(a.left, b.right) && isSymmetricAux(a.right, b.left);
    }
}