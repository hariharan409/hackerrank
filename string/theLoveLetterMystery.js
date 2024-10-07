
/**
 * @param {String} originalStr
 * @returns {Number}
 */
const theLoveLetterMystery = (originalStr) => {
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz"; 
    let leftIndex = 0;
    let rightIndex = originalStr.length - 1;
    let shiftCount = 0;
    while(leftIndex < rightIndex) {
        shiftCount += Math.abs(englishAlphabet.indexOf(originalStr[leftIndex]) - englishAlphabet.indexOf(originalStr[rightIndex]));
        leftIndex++;
        rightIndex--;
    }
    return shiftCount;
}

console.log(theLoveLetterMystery(originalStr = "abcba"));

