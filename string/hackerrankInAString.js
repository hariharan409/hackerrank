
/**
 * @param {String} originalStr
 * @return {String}
 */
const hackerrankInAString = (originalStr) => {
    let targetStr = "hackerrank";
    let j=0;
    for(let i=0;i<originalStr.length;i++) {
        if(originalStr[i] === targetStr[j]) {
            j++;
        }
        if(j === targetStr.length) {
            return "YES";
        }
    }
    return "NO";
}

console.log(hackerrankInAString(originalStr = "haacckkerrannkk"));