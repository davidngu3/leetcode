class Solution:
    
    def countPrimes(self, n: int) -> int:
        numPrimes = 0
        for i in range(2, n):
            if self.isPrime(i):
                numPrimes += 1
        
        return numPrimes
    
    def isPrime(self, n):
        for j in range (2, n//2 + 1):
            if n % j == 0:
                return False
        return True