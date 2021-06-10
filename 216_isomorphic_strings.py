class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        charmap = dict()
        seen = set()
        
        for index, char in enumerate(s):
            # error 1: identical characters do not map to same character
            if char in charmap and charmap[char] is not t[index]:
                return False
            
            # error 2: different characters map to the same characters
            if t[index] in seen and char not in charmap:
                return False
            
            charmap[char] = t[index]
            seen.add(t[index])
        
        return True
            
        
        