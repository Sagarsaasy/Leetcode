/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p = m + n - 1; p1 = m - 1; p2 = n - 1;
    while(p1 >= 0 && p2 >= 0) {
        if(nums1[p1] >= nums2[p2]) {
            nums1[p] = nums1[p1];
            p--;
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p--;
            p2--;
        }
    }
    while(p2 >= 0) { //if some elements are left in nums2, copy them to nums1
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};
//nums1 = [ 1,2,2,3,5,6 ]