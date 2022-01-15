class Solution {
    public static void main(String[] args) {
        System.out.println(getSum(7, 126));
        
    }

    public static int getSum(int a, int b) {
        int ret = 0;
        int place = 0;
        int c = 0;
        
        while (a != 0 || b != 0 || c != 0) {
            // extract relevant digit
            int x = a & 1;
            int y = b & 1;
            
            // calc result
            int sum = (x & y & c) | (x & ~y & ~c) | (~x & y & ~c) | (~x & ~y & c); 
            c = (x & y) | (y & c) | (x & c);
            
            // update result
            ret = ret | sum << place;
            place++;
            
            // shift a, b
            a >>>= 1;
            b >>>= 1;
        }

        return ret;
    }
}