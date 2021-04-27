import math
import os
import random
import re
import sys

# Complete the minimumBribes function below.
def minimumBribes(q):
    numBribes = 0
    
    n = len(q)
    for i in range(n): # for each person in the q,
        # determine whether have have bribed more than twice
        if ((q[i] - 1) - i) > 2:
            print("Too chaotic")
            return
        
        # find how many times q[i] has been bribed
        # q[i] has been bribed by person in front if they have a larger inital position than it
        # for any person q[i], the only candidates who could have surpassed them are those 2 in front of the initial position (q[i])
        for j in range(max(0, q[i] - 2), i):
            if q[j] > q[i]:
                numBribes += 1
    
    print(numBribes)
    return 
             

if __name__ == '__main__':
    t = int(input())

    for t_itr in range(t):
        n = int(input())

        q = list(map(int, input().rstrip().split()))

        minimumBribes(q)
