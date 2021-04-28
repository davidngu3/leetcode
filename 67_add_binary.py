# Given two binary strings a and b, return their sum as a binary string.

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        carry = 0
        ans = ''

        aPoint = len(a) - 1
        bPoint = len(b) - 1

        while aPoint >= 0 or bPoint >= 0:
            # default to 0 if negative index
            aVal = a[aPoint] if aPoint >= 0 else "0"
            bVal = b[bPoint] if bPoint >= 0 else "0"

            # calculate sum and carry
            sumVal = int(aVal) + int(bVal) + carry # can be 0, 1, 2 or 3
            remainder = sumVal % 2  
            carry = sumVal // 2 # only returns 1 if sum is 2 or 3

            ans = str(remainder) + ans # push to front of ans

            # decrement pointers
            aPoint -= 1
            bPoint -=1
        
        # final carry not yet added
        if carry:
            ans = str(carry) + ans

        return ans

newSol = Solution()
print(newSol.addBinary("11", "1"))
        
        

