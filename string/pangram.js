// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. 
// Ignore case. Return either pangram or not pangram as appropriate.
/**
 * @param {String} originalStr
 * @returns {String}
 */
const pangram = (originalStr) => {
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
    originalStr = originalStr.toLowerCase().split("").sort().join("");
    let j=0;
    for(let i=0;i<originalStr.length;i++) {
        if(originalStr[i] === englishAlphabet[j]) {
            j++;
        }
        if(j === englishAlphabet.length) {
            return "pangram";
        }
    }
    return "not pangram"
}

console.log(pangram(originalStr = "The quick brown fox jumps over the lazy dog."));