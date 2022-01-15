class Solution11 {
    public static void main(String[] args) {
        System.out.println(maxArea(new int[] { 1, 8, 6, 2, 5, 4, 8, 3, 7 }) );
    }

    public static int maxArea(int[] height) {
        int maxArea = 0;
        int l = 0;
        int r = height.length - 1;

        while (l < r) {
            // calculate area
            int area = (r - l) * Math.min(height[l], height[r]);
            maxArea = Math.max(area, maxArea);

            // move l or r to next biggest endpoint
            if (height[l] <= height[r]) {
                int curr = height[l];
                while (l < r && height[l] <= curr) {
                    l++;
                }
            } else {
                int curr = height[r];
                while (l < r && height[r] <= curr) {
                    r--;
                }
            }
        }

        return maxArea;
    }
}
