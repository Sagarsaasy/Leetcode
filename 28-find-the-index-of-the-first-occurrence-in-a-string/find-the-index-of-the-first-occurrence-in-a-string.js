/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const strPresent = haystack.includes(needle);
    if(strPresent) {
        let index = haystack.indexOf(needle); //indexOf always returns first ccurence index
        return index;
    } else {
        return -1;
    }
};