/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // let counter = 0;
    // let filteredArray = []
    let j = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            // filteredArray.push(nums[i])
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};

// j=5, i=9
// [0,1,2,3,4]