/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  nums = [4,3,2,7,8,2,3,1]
//  arr = [0,1,1,1,0,0,1,1]

var findDuplicates = function(nums) {
    let arr = [...Array(nums.length)];
    arr.fill(0);
    // console.log(arr)
    result = [];
    for(let i = 0; i < nums.length; i++) {
        if(arr[nums[i]-1] !== 1) {
            arr[nums[i]-1] = 1
        } else {
            result.push(nums[i]);
        }
    }
    return result;
};