class Solution88 {
    public static void main(String[] args) {
        merge(new int[]{1, 2, 3, 0, 0, 0}, 3, new int[]{2, 5, 6}, 3);
    }
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        
        int p = nums1.length - 1;
        
        while (p >= 0) {
            if (n <= 0) { // case 1: arr2 is exhausted
                nums1[p] = nums1[m-1];
                m--;
            }
            else if (m <= 0) { // case 2: arr1 is exhausted
                nums1[p] = nums2[n-1];
                n--;
            }
            else if (nums1[m-1] >= nums2[n-1]) { // case 3: take from arr1
                nums1[p] = nums1[m-1];
                m--;
            }
            else {
                nums1[p] = nums2[n-1]; // case 4:  take from arr2
                n--;
            }
            p--;
        }
    }
}