class Solution66 {
    public int[] plusOne(int[] digits) {
        int i = digits.length - 1;
        
        boolean carry = true;
        
        while (i >= 0 && carry == true) {
            int sum = digits[i] + 1;
            if (sum > 9) {
                digits[i] = 0;
                carry = true;
            }
            else {
                digits[i] = sum;
                carry = false;
            }
            i--;
        }
        
        // special case: most signifcant digit overflow
        if (carry) {
            int[] newArr = new int[digits.length + 1];
            for (int j = 1; j < newArr.length; j++) {
                newArr[j] = digits[j-1];
            }
            newArr[0] = 1;
            digits = newArr;
        }
        
        return digits;
    }
}