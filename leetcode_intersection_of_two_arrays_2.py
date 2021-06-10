class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ans = []
        
        # enter first array into hashmap with frequencies
        seen = {}
        for num in nums1:
            if num in seen:
                seen[num] += 1
            else:
                seen[num] = 1
                
        # iterate second list, decrementing if seen and append to ans
        for num in nums2:
            if num in seen and seen[num] > 0:
                seen[num] -= 1
                ans.append(num)
        
        return ans
            