class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        
        n = len(nums)
        
        for i in range(n):
            required = target - nums[i]
            
            if required in hashmap:
                return [i, hashmap[required]]
            
            hashmap[nums[i]] = i # store key value pair (num, index)
            
        return False