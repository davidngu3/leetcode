# We have two special characters. 
# The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).
# Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. 
# The given string will always end with a zero.

class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        i = 0
        
        while i < len(bits) - 1:
            if bits[i] == 0:
                i += 1
            else:
                i += 2
        
        return i == len(bits) - 1:

            