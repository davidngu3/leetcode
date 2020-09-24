class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 0:
            return 0
        
        buyPrice = prices[0]
        maxProfit = 0
        
        for i in range(1, len(prices)):
            if prices[i] < buyPrice:
                buyPrice = prices[i]
            elif prices[i] - buyPrice > maxProfit:
                maxProfit = prices[i] - buyPrice
        
        return maxProfit