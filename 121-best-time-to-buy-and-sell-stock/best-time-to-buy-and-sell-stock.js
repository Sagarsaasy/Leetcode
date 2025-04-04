/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let n = prices.length;
    // let minValue = prices[0];
    // let minIndex = 0;
    
    // for(let i=1; i<n-1; i++) {
    //     if(prices[i] < minValue) {
    //         minValue = prices[i];
    //         minIndex = i;
    //     }
    // }
    // let maxValue = prices[minIndex+1];

    // if(minIndex + 1 !== n - 1) {
    //     for(let j=minIndex+2; j<n; j++) {
    //     if(prices[j] > maxValue) {
    //         maxValue = prices[j];
    //     }
    //   }
    // }


    // if(maxValue <= minValue) {
    //     return 0;
    // } 
    // return maxValue - minValue;

// NOTE: look for min price first then find higher price for selling
    let buy = prices[0], profit = 0;
    for(let i=1; i<prices.length; i++) {
        if(prices[i] < buy) {
            buy = prices[i];
        } else if(prices[i] - buy > profit) {
            profit = prices[i] - buy;
        }
    }
    return profit;
};