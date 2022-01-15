class Solution190 {
    public static void main(String[] args) {
        reverseBits(3);
    }

    // you need treat n as an unsigned value
    public static int reverseBits(int n) {
        int ret = 0;
        
        
        for (int i = 0; i < 32; i++) {
            ret <<= 1;
            
            int x = n & 1;
            ret |= x;
            n >>>= 1;
        }
        
        return ret;
    }
}