import math

class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        # create dictionary of restaurants in list1, storing index as value
        seen = {}
        for index, restaurant in enumerate(list1):
            seen[restaurant] = index
        
        # for each restaurant in list2, check if in dictionary and keep track of lowest index
        # can terminate if lowestSum is smaller than index here
        answer = []
        lowestSum = math.inf
        for index, restaurant in enumerate(list2):
            if restaurant in seen:
                newSum = index + seen[restaurant]
                if newSum == lowestSum:
                    answer.append(restaurant)
                elif newSum < lowestSum:
                    answer = [restaurant]
                    lowestSum = newSum
        
        return answer
                
            