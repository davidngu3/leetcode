class Solution70 {
    public static void main(String[] args) {
        climbStairs(3);
    }

    public static int climbStairs(int n) {
        // compute the n+1th fibonacci number
        int[] memo = new int[n+1];
        memo[0] = 1;
        memo[1] = 1;
        
        for (int i = 2; i < n + 1; i++) {
            memo[i] = memo[i-1] + memo[i-2];
        }
        
        return memo[n];
    }
}