/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    return arr1.filter(a => {
        for (let i=0; i<arr2.length; i++) {
            if (Math.abs(a-arr2[i]) <= d) {
                return false;
            }
        }
        return true;
    }).length;
};

findTheDistanceValue([4,5,8], [10,9,1,8], 2);