// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. 
// To do this, you are allowed to delete zero or more characters in the string.
// Your task is to find the minimum number of required deletions.

/**
 * @param {String} originalStr
 * @returns {Number}
 */
const alternatingCharacters = (originalStr) => {
    let removalCount = 0;
    for(let i=0;i<originalStr.length;i++) {
        if(originalStr[i] === originalStr[i+1]) {
            removalCount++;
        }
    }
    return removalCount;
}

console.log(alternatingCharacters("AAAA"));