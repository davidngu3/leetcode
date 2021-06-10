class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        indexMap = {}
        
        for index, val in enumerate(nums):
            if val in indexMap:
                if abs(index - indexMap[val]) <= k:
                    return True
            
            indexMap[val] = index
     
        return False