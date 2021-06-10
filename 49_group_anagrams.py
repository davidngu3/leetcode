class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = {}
        
        for s in strs:
            decoded = "".join(sorted(s))
            if decoded in anagrams:
                anagrams[decoded].append(s)
            else:
                anagrams[decoded] = [s]
            
        ans = []
        for i in anagrams:
            ans.append(anagrams[i])
        
        return ans