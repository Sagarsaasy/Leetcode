/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n=nums.length;
    let prefix=1;
    let resArr = Array(n).fill(1);

    for(let i=0; i<nums.length; i++) {
        resArr[i] = prefix;
        prefix = prefix * nums[i]; // 1 2 6
        // resArr=[1,1,2,6]
    }

    let suffix=1;
    for(let i=n-1; i>=0; i--) {
        resArr[i] = resArr[i] * suffix;
        suffix = suffix * nums[i]; // 1*4, 4*3, 12*2
        // resArr=[24,12,8,6]
    }
    return resArr;
};