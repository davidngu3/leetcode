class Solution191 {
    public static void main(String[] args) {
        hammingWeight(16);
    }
    
    public static int hammingWeight(int n) {
        int weight = 0;

        while (n != 0) {
            n = n & (n - 1);
            weight++;
        }

        return weight;
    }
}