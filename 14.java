class Solution14 {
    public static void main(String[] args) {
        System.out.println(longestCommonPrefix(new String[] {"ha", "happpy", "harry"}));
    }

    public static String longestCommonPrefix(String[] strs) {
        String prefix = "";

        if (strs.length == 0) {
            return prefix;
        }

        String firstString = strs[0];

        for (int i = 0; i < firstString.length(); i++) {
            Character c = firstString.charAt(i);

            for (String s : strs) {
                if (i >= s.length() || !(s.charAt(i) == c)) {
                    return prefix;
                }
            }

            // char belongs in all strings, add to prefix
            prefix += c;
        }

        return prefix;
    }
}