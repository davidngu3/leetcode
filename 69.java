class Solution69 {
    public int mySqrt(int x) {
        // binary search from 0 to x
        int L = 0;
        int R = Math.min(x, 46340);
        
        while (L <= R) {
            int M = L + (R-L)/2;
            
            int guess = M*M;
            
            if (guess == x) {
                return M;
            }
            else if (guess < x) {
                L = M + 1;
            }
            else { // guess > x
                R = M - 1;
            }
        }
        
        return R;
    }
}