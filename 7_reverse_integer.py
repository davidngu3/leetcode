class Solution:
    def reverse(self, x: int) -> int:
        negFlag = False
        if x < 0:
            negFlag = True
            x *= -1
        
        intArr = [i for i in str(x)]
        reversedArr = intArr[::-1]
        reversedStr = ''.join(reversedArr)
        reversedInt = int(reversedStr)
        
        if negFlag:
            reversedInt *= -1
        
        maxPosInt = 2**31 - 1
        maxNegInt = -2**31
        
        if reversedInt >= maxNegInt and reversedInt <= maxPosInt:
            return reversedInt
    
        return 0