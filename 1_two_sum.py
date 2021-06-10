class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        
        for index, value in enumerate(nums):
            required = target - nums[index]
            
            if required in hashmap:
                return [index, hashmap[required]]
            
            hashmap[value] = index # store key value pair (num, index)
            
        return False