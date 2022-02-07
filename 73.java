class Solution73 {
    public static void main(String[] args) {
        int[] a = new int[] {1, 1, 1};
        int[] b = new int[] {1, 0, 1};
        int[] c = new int[] {1, 1, 1};
        int[][] matrix = new int[][] { a, b, c };

        setZeroes(matrix);
    }

    public static void setZeroes(int[][] matrix) {
        // the problem: how to differentiate original zeroes and new zeroes?
        // cant use placeholder as values in matrix span whole integer range
        
        // solution: use the first row and first column as a flagging system. 
        // set zero rows, cols which we know the wohle thing should be zero
    
        // on second pass, use the flags to set the rest of the cells to zero

        // O(MN) time complexity O(1) space

    }
}