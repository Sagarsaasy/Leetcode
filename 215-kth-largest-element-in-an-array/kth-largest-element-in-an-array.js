/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

//[3,2,1,5,6,4] -- [6,5,4,3,2,1]