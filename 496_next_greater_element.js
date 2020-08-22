/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ret = [];
    
    for (let i = 0; i < nums1.length; i++) {
        let corr = nums2.indexOf(nums1[i]);
        let nextGreatest = -1;
        
        for (let j = corr+1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                nextGreatest = nums2[j];
                break;
            }
        }    
        ret.push(nextGreatest);
    }
    
    return ret;
};