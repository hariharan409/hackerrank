
/**
 * @param {String} originalStr
 * @returns {Number}
 */
const palindromeIndex = (originalStr) => {
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz"; 
    let leftIndex = 0;
    let rightIndex = originalStr.length - 1;
    let removeIndex = null;
    let misMatchCount = 0;

    while(leftIndex < rightIndex) {
        if(englishAlphabet.indexOf(originalStr[leftIndex]) === englishAlphabet.indexOf(originalStr[rightIndex])) {
            leftIndex++;
            rightIndex--;
            continue;
        }
        removeIndex = leftIndex;
        leftIndex++;
        misMatchCount++;
    }

    return misMatchCount === 0 ? -1 : misMatchCount;
}

console.log(palindromeIndex("aaab"));