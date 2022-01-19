class Solution647 {
    public int countSubstrings(String s) {
        // at each index i, check left and right spanning as i as centre,
        // AND check left right spanning as i-1, i as centre
        // continue until i < s.length()
        
        if (s.length() == 0) {
            return 0;
        }
        
        int ret = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // add 1 for single char
            ret++;

            // as centred palindrome
            int l = i-1;
            int r = i+1;
            
            while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
                ret++;
                l--;
                r++;
            }
            
            // as offset palindrome
            l = i-1;
            r = i;
            while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
                ret++;
                l--;
                r++;
            }
        }
        
        return ret;
        // complexity: N^2
    }
}