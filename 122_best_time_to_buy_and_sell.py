class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        maxProfit = 0 # answer
    
        i = 1
        n = len(prices)
        
        # local max can only be set after finding a local min
        
        while i < n:
            if prices[i] > prices[i-1]:
                localProfit = prices[i] - prices[i-1]
                maxProfit += localProfit
            
            i += 1
            
        return maxProfit
                
            