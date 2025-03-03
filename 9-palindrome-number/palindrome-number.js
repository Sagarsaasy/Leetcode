/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // let reverse = 0;
    // let temp = x;
    // while(x != 0) {
    //     rem = x % 10;
    //     reverse = (reverse * 10) + rem;
    //     x = (x - (x % 10)) / 10;
    // }
    // // console.log(reverse)
    // if(temp == reverse && temp >= 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    let rev = 0;
    let givenNumber = x
    while(x != 0) {
        rem = x % 10; //1 2 1
        rev = (rev * 10) + rem;  //1 12 121
        x = (x-rem) / 10; // 12 1 0
    }
    if(rev != givenNumber || givenNumber < 0) {
        return false
    } else {
        return true
    }
};