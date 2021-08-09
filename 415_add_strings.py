# Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        res = []

        carry = 0
        p1 = len(num1) - 1
        p2 = len(num2) - 1
        
        while p1 >= 0 or p2 >= 0:
            x1 = ord(num1[p1]) - ord('0') if p1 >= 0 else 0
            x2 = ord(num2[p2]) - ord('0') if p2 >= 0 else 0
            value = (x1 + x2 + carry) % 10
            carry = (x1 + x2 + carry) // 10
            res.append(value)
            p1 -= 1
            p2 -= 1
        
        if carry:
            res.append(carry)
        
        return ''.join(str(x) for x in res[::-1])

# Solution 2
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        output = ""
        
        p1 = len(num1) - 1
        p2 = len(num2) - 1
        carry = 0
        
        while p1 >= 0 or p2 >= 0:
        
            if p1 < 0: 
                p1val = 0
                p2val = num2[p2]
            elif p2 < 0:
                p1val = num1[p1]
                p2val = 0
            else:
                p1val = num1[p1]
                p2val = num2[p2]
            
            sum = int(p1val) + int(p2val) + carry
            
            val = sum % 10
            carry = sum // 10
            
            output = str(val) + output
            
            p1 -= 1
            p2 -= 1
                
        if carry:
            output = str(carry) + output
        
        return output
        