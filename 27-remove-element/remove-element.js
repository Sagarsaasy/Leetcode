/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var j = 0;
    // var filteredArray = [];
    for(let i=0; i< nums.length; i++) {
        if(nums[i] != val) {
            nums[j] = nums[i];
            j++;
            // counter = filteredArray.length
        }
    }
    return j;
};