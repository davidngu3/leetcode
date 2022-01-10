class Solution121 {
    public int maxProfit(int[] prices) {
        int bestProfit = 0;
        int lowestPrice = Integer.MAX_VALUE;
        
        for (int price : prices) {
            lowestPrice = Math.min(lowestPrice, price);
            bestProfit = Math.max(bestProfit, price - lowestPrice);
        }
        
        return bestProfit;
    }
}