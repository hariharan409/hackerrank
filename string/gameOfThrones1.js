
/**
 * @param {String} originalStr
 * @returns {String} 
 */
const gameOfThrones1 = (originalStr) => {
    let frequency = {};
    // Count frequency of each character
    for(let char of originalStr) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    // Count how many characters have an odd frequency
    let oddCount = 0;
    for(let char in frequency) {
        if(frequency[char] % 2 !== 0) {
            oddCount++;
        }
        if(oddCount > 1) {
            return "NO";
        }
    }
    return "YES";
}

console.log(gameOfThrones1(originalStr = "aabbccdd"));