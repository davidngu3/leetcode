class Solution338 {
    public int[] countBits(int n) {
        int[] ret = new int[n+1];
        
        ret[0] = 0;
        
        for (int i = 1; i <= n; i++) {
            ret[i] = ret[i/2] + i % 2;
        }                             
        
        return ret;
    }
}