
/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

/**
 * @param {String} s
 * @param {Number} k
 * @return {String}
 */
const caesarCipher = (s,k) => {
    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const shift = k % 26; // Normalize k to ensure it stays within the alphabet range
    let tempArr = s.split("");
    for(let i=0;i<tempArr.length;i++) {
        let char = tempArr[i];
        let isUpperCase = (char === char.toUpperCase());
        char = char.toLowerCase();
        if(originalAlphabet.includes(char)) {
            let charIndex = originalAlphabet.indexOf(char);
            let newIndex = (charIndex + shift) % 26; // Wrap around the alphabet if necessary
            let shiftedChar = originalAlphabet[newIndex];
            tempArr[i] = isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;

        }
    }
    return tempArr.join("");
}

console.log(caesarCipher(s="xyz",k=3));