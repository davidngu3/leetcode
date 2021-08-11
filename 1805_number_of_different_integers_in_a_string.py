class Solution:
    def numDifferentIntegers(self, word: str) -> int:
        intSet = set()
        startIntFlag = False
        word += "a" # dummy at the end to ensure last integer is processed
        
        for c in word:
            
            if c.isdigit(): 
                if not startIntFlag:
                    startIntFlag = True
                    newIntString = c
                
                elif startIntFlag:
                    newIntString += c
            
            if not c.isdigit():
                if startIntFlag:
                    newInt = int(newIntString)
                    intSet.add(newInt)
                    startIntFlag = False
            
        return len(intSet)
                
                