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
    
    
    }

    // O(M + N) time complexity
    public static void setZerosRowCol(int rowIndex, int colIndex, int[][] matrix) {
        // set row to zero
        for (int i = 0; i < matrix[rowIndex].length; i++) {
            matrix[rowIndex][i] = 0;
        }

        // set col to zero
        for (int j = 0; j < matrix[0].length; j++) {
            matrix[j][colIndex] = 0;
        }
    }
}