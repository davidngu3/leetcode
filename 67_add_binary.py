# Given two binary strings a and b, return their sum as a binary string.

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        intA = int(a, 2)
        intB = int(b, 2)
        intSum = intA + intB
        binSum = bin(intSum)

        print(binSum[2:])
        return binSum

newSolution = Solution()
newSolution.addBinary("11", "1")  