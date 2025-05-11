/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //sliding window technique with two pointers
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map();

    for(let i=0; i<s.length; i++) {
        const char = s[i];
        //shrink the window only if the repeated char is inside the current window
        if(charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;  //2 //3
        }
        charIndexMap.set(char, i); //{ a:3 ,b:4, c:5 }
                                   //{ b:2 }
                                   // { p:1, w:5, k:1, e:1 }
        maxLength = Math.max(maxLength, i - start + 1); // 3 //1 //3
    }
    return maxLength;
};