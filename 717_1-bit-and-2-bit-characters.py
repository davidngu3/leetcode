# We have two special characters. 
# The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).
# Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. 
# The given string will always end with a zero.

class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        skipFlag = False
        lastChar = None
        
        for bit in bits:
            
            if skipFlag:
                skipFlag = False
                lastChar = 1
                continue
                
            if bit == 1:
                skipFlag = True
            else:
                lastChar = 0
        
        return not lastChar