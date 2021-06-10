class Solution:
    def firstUniqChar(self, s: str) -> int:
        charFrequency = {}
        
        for char in s:
            if char in charFrequency:
                charFrequency[char] += 1
            else:
                charFrequency[char] = 1
                
        for index, char in enumerate(s):
            if charFrequency[char] == 1:
                return index
        
        return -1
        
        