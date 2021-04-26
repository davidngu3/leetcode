import math
import os
import random
import re
import sys

# Complete the hourglassSum function below.
def hourglassSum(arr):
    maxHourglassSum = -math.inf
    
    for row in range(4):
        for col in range(4):
            newSum = getHourglassSum(arr, row, col)
            if newSum > maxHourglassSum:
                maxHourglassSum = newSum
                
    return maxHourglassSum

# return the sum of the hourglass extruded from (row, col) where (row, col) is the top left of the hourglass
def getHourglassSum(arr, row, col):
    sum = 0
    for i in range(3):
        for j in range(3):
            if not ((i == 1) and (j == 0 or j == 2)):
                sum += arr[row + i][col + j]
    return sum

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = hourglassSum(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
