
/**
 * 
 * @param {String} s
 * @returns {String} 
 */
const twoCharacters = (s) => {
    // Get all unique characters in the string
    const uniqueChars = [...new Set(s)];
    let maxLength = 0;

    // Check all pairs of unique characters
    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = i + 1; j < uniqueChars.length; j++) {
            const char1 = uniqueChars[i];
            const char2 = uniqueChars[j];
            
            // Filter the string to keep only char1 and char2
            const filteredString = s.split('').filter(c => c === char1 || c === char2).join('');
            
            // Check if the filtered string alternates between char1 and char2
            if (isAlternating(filteredString)) {
                maxLength = Math.max(maxLength, filteredString.length);
            }
        }
    }

    return maxLength;
}

// Helper function to check if a string alternates between two characters
function isAlternating(s) {
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(twoCharacters(s="abaacdabd"));