import java.util.*;

class Solution94 {
    public List<Integer> inorderTraversal(TreeNode94 root) {
        List<Integer> res = new ArrayList<Integer>();
        
        inorderTraversalAux(root, res);
        return res;
    }
    
    public void inorderTraversalAux(TreeNode94 root, List<Integer> res) {
        if (root != null) {
            // left child
            inorderTraversalAux(root.left, res);
            
             // process root
            res.add(root.val);
            
            // right child
            inorderTraversalAux(root.right, res);
        }
    }
}

class TreeNode94 {
    int val;
    TreeNode94 left;
    TreeNode94 right;

    TreeNode94() {
    }

    TreeNode94(int val) {
        this.val = val;
    }

    TreeNode94(int val, TreeNode94 left, TreeNode94 right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}