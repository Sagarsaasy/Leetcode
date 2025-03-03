/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // var resultArray = []
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             resultArray.push(i, j);
    //             return resultArray
    //         }
    //     }
    // }


    // let i = 0;
    // let j = nums.length - 1;
    // while(i < j && nums[i] + nums[j] == target) {
    //     if(nums[i] + nums[j] > target) {
    //         j--
    //     } else if(nums[i] + nums[j] < target) {
    //         i++
    //     }
    //     nums[i] + nums[j]
    // }

    //using hashmap
    let sumMap = new Map();
    for(let i=0; i<nums.length; i++) {
        let complement = target - nums[i]; //7,2

        if(sumMap.has(complement)) { //initially empty
            return [sumMap.get(complement), i];
        }
        sumMap.set(nums[i], i); //{2:0}
    }
    return [];
};