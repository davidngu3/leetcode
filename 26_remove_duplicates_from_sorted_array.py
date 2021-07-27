class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        
        i = 0
        j = 1
        n = len(nums)
        
        while j < n:
            if nums[i] != nums[j]:
                i += 1
                nums[i] = nums[j]
        
            j += 1
        
        