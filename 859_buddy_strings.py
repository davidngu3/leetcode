class Solution:
    def buddyStrings(self, a: str, b: str) -> bool:
        if a == b:
            aDict = {}
            for c in a:
                if c in aDict:
                    return True
                aDict[c] = True
        
        if len(a) != len(b):
            return False
        
        mismatched1 = None
        mismatched2 = None
        
        n = len(a)
        for i in range(n):
            if a[i] is not b[i]:
                if mismatched1 is None :
                    mismatched1 = i
                elif mismatched2 is None:
                    mismatched2 = i
                elif mismatched2:
                    return False
        
        if not mismatched2:
            return False
        
        if a[mismatched1] == b[mismatched2] and a[mismatched2] == b[mismatched1]:
            return True
        else:
            return False
                
            
        
        
        