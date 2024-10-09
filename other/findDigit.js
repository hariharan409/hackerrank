
/**
 * 
 * @param {Number} n 
 */
const findDigit = (n) => {
    let divisorCount = 0;
    let numberString = n.toString();

    for(let i=0;i<numberString.length;i++) {
        if(n % parseInt(numberString[i]) === 0) {
            divisorCount++;
        }
    }
     return divisorCount;
}

console.log(findDigit(n = 10));