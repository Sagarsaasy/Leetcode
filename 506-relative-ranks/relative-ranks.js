/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let arr = score.slice(0); //slice method returns a new array; does not change existing array
    arr.sort((a, b) => b-a);

    let arrMap = new Map();

    for(let i=0; i<arr.length; i++) {
        if(i == 0) {
            arrMap.set(arr[i], "Gold Medal")
        } else if(i == 1) {
            arrMap.set(arr[i], "Silver Medal")
        } else if(i == 2) {
            arrMap.set(arr[i], "Bronze Medal")
        } else {
            arrMap.set(arr[i], (i+1).toString())
        }
    }
    // console.log(arrMap)
    // return arrMap.get()
    for(let i=0; i<arr.length; i++) {
        score[i] = arrMap.get(score[i])
    }
    return score;

};