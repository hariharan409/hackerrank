// int B[N]: the numbers of loaves each persons starts with
/**
 * 
 * @param {Array} b 
 * @returns {Number}
 */
const fairRations = (b) => {
    let distributeCount = 0;
    for(let i=b.length-1;i>=0;i--) {
        let currentValue = b[i];
        if(currentValue % 2 === 0) {
            continue;
        } else {
            if(i !== 0) {
                b[i]--;
                distributeCount++;
                b[i-1]--;
                distributeCount++;
            }
        }
    }
    return b.filter((loaves) => loaves % 2 !== 0).length > 0 ? "NO" : distributeCount;
}

console.log(fairRations(b=[2,3,4,5,6]));