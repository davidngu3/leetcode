class Solution191 {
    public static void main(String[] args) {
        hammingWeight1(16);
    }

    public static int hammingWeight1(int n) {
        int weight = 0;

        while (n != 0) {
            n = n & (n - 1);
            weight++;
        }

        return weight;
    }

    public static int hammingWeight2(int n) {
        int weight = 0;

        while (n != 0) {
            weight += n & 1;
            n >>>= 1;
        }

        return weight;
    }
}