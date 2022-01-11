class Solution238 {
    public static void main(String[] args) {
        productExceptSelf(new int[] {1, 2, 3, 4});
    }

    public static int[] productExceptSelf(int[] nums) {
        // build prefix product array: product of values from nums[0 : i]
        int[] prefix = new int[nums.length];
        prefix[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i-1] * nums[i]; 
        }
        
        // build suffix product array: product of values from nums[i: n]
        int[] suffix = new int[nums.length];
        suffix[nums.length - 1] = nums[nums.length - 1];
        for (int i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i+1] * nums[i]; 
        }
        
        // calculate result
        int[] res = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            if (i == 0) {
                res[i] = suffix[1];    
            }
            else if (i == nums.length - 1) {
                res[i] = prefix[nums.length-2];
            }
            else {
                res[i] = prefix[i-1]*suffix[i+1];   
            }
        }
        
        return res;
    }
}