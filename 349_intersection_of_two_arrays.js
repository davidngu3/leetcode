/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var intersection = nums1.filter(e => nums2.includes(e));
    
    let ret = new Set(intersection);
    
    return Array.from(ret);
};