class Solution28 {
    public static void main(String[] args) {
        System.out.println(strStr("hello", "l"));
    }

    public static int strStr(String haystack, String needle) {
        if (needle.equals("")) {
            return 0;
        }

        for (int i = 0; i < haystack.length() - needle.length() + 1; i++) {
            if (haystack.substring(i, i + needle.length()).equals(needle)) {
                return i;
            }
        }

        return -1;
    }
}