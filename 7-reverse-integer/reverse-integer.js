/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    // var rem;
    while(x != 0) {
        rem = x % 10;
        rev = (rev * 10) + rem;
        x = (x - rem)/10;
        // x = (x / 10);
        //x = 123-3 = 120/10 = 12
        //x=12-2 = 10/10 = 1
        //x=1-1 = 0/10=0
    }
    if(rev <= -2147483651 || rev >= 2147483651) {
        return 0;
    }
    return rev;
};

//in js, all arithmetic follows floating point rules because js only has Number