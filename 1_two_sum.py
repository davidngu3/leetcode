class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        
        for index, value in enumerate(nums):
            required = target - nums[index]
            
            if required in seen:
                return [index, seen[required]]
            
            seen[value] = index # store key value pair (num, index)
            
        return False