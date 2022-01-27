class Solution55 {
    public static void main(String[] args) {
        canJump(new int[] {0, 2, 3});
    }

    public static boolean canJump(int[] nums) {
       int reachable = 0;

       for (int i = 0; i < nums.length; i++) {
           // early failure condition
           if (i > reachable) { 
               return false;
           }
           reachable = Math.max(reachable, i + nums[i]);

           // early success condition
           if (reachable >= nums.length - 1) {
               return true;
           }
       }

       // not hit: code will reach one of two early conditions
       return true;
    }
}