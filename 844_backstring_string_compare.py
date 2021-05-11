class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        pointS = len(s)-1
        pointT = len(t)-1
        skipS = 0
        skipT = 0
        
        while pointS >= 0 or pointT >= 0:
            print(pointS, pointT)
            
            # check for first possible char in s
            while pointS >= 0:
                if s[pointS] == '#':
                    skipS += 1
                    pointS -= 1
                elif skipS > 0:
                    skipS -= 1
                    pointS -=1
                else:
                    break;
            
            # check for first possible char in t
            while pointT >= 0:
                if t[pointT] == '#':
                    skipT += 1
                    pointT -= 1
                elif skipT > 0:
                    skipT -= 1
                    pointT -=1
                else:
                    break;
                
            if pointS >= 0 and pointT >= 0 and (s[pointS] is not t[pointT]):
                return False
            elif pointS >= 0 and pointT < 0:
                return False
            elif pointT >= 0 and pointS < 0:
                return False
            
            pointS -= 1
            pointT -= 1 
            
        return True
            
                
            
                
                
            
        