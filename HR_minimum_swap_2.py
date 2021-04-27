#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumSwaps function below.
def minimumSwaps(arr):
    ref_arr = sorted(arr) # sort array 
    index_dict = {v: i for i,v in enumerate(arr)} # lookup table of positions
    
    ans = 0
    
    for i,v in enumerate(arr):
        correct_value = ref_arr[i] # find number that should go at i
        if v != correct_value:
            to_swap_ix = index_dict[correct_value] # find position of correct number
            arr[to_swap_ix],arr[i] = arr[i], arr[to_swap_ix] # perform swap
            index_dict[v] = to_swap_ix # update dict
            index_dict[correct_value] = i
            ans += 1 # increment ans
            
    return ans

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    res = minimumSwaps(arr)

    fptr.write(str(res) + '\n')

    fptr.close()
