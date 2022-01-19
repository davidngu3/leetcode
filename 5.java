class Solution5 {
    public String longestPalindrome(String s) {
        // at each index i, check left and right spanning as i as centre,
        // AND check left right spanning as i-1, i as centre
        // continue until i < s.length()
        
        if (s.length() == 0) {
            return "";
        }
        
        String longest = String.valueOf(s.charAt(0));
        
        for (int i = 0; i < s.length(); i++) {
            // as centred palindrome
            int l = i-1;
            int r = i+1;
            
            while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
                String newPalindrome = s.substring(l, r+1); 
                if (newPalindrome.length() > longest.length()) {
                    longest = newPalindrome;
                }
                l--;
                r++;
            }
            
            // as offset palindrome
            l = i-1;
            r = i;
            while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
                String newPalindrome = s.substring(l, r+1); 
                if (newPalindrome.length() > longest.length()) {
                    longest = newPalindrome;
                }
                l--;
                r++;
            }
        }
        
        return longest;
        // complexity: N^2
        
    }
}