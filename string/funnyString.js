// In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny, 
// create a copy of the string in reverse e.g. . Iterating through each string, compare the absolute difference in the ascii values 
// of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list of absolute differences is the same for both strings, they are funny.
// Determine whether a give string is funny. If it is, return Funny, otherwise return Not Funny.
/**
 * @param {String} originalStr
 * @returns {String}
 */
const funnyString = (originalStr) => {
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz"; 
    let leftIndex = 0;
    let rightIndex = originalStr.length - 1;
    while(leftIndex < rightIndex) {
        let leftDiff  = Math.abs(englishAlphabet.indexOf(originalStr[leftIndex])  - englishAlphabet.indexOf(originalStr[leftIndex + 1]));
        let rightDiff = Math.abs(englishAlphabet.indexOf(originalStr[rightIndex]) - englishAlphabet.indexOf(originalStr[rightIndex - 1]));
        if(leftDiff !== rightDiff) {
            return "Not Funny";
        }
        leftIndex++;
        rightIndex--;
    }
    return "Funny";
}

console.log(funnyString(originalStr = "bcxz"));