class Solution268 {
    public static void main(String[] args) {
        
    }
    public static int missingNumber(int[] nums) {
        int n = nums.length; 
        int sum = 0;
        int calcSum = n*(n+1)/2;
        
        for (int i : nums) {
            sum += i;
        }
        
        return calcSum - sum;
    }
}