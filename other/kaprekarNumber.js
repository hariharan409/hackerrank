
/**
 * 
 * @param {Number} p 
 * @param {Number} q 
 */
// int p: the lower limit
// int q: the upper limit
const kaprekarNumber = (p,q) => {
    let kaprekarNumberList = [];
    for(let i=p;i<=q;i++) {
        let pow = Math.pow(i,2).toString();
        let left = pow.substring(0,Math.floor(pow.length/2)) || "0";
        let right = pow.substring(Math.floor(pow.length/2)) || "0";
        if((parseInt(left) + parseInt(right)) === parseInt(i)) {
            kaprekarNumberList.push(i);
        }
    }
    if(kaprekarNumberList.length === 0) {
        console.log("INVALID RANGE")
    } else {
        console.log(...kaprekarNumberList.sort((a,b) => a-b));
    }
}

kaprekarNumber(p=1,q=100);