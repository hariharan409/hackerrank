// Two words are anagrams of one another if their letters can be rearranged to form the other word.
// Given a string, split it into two contiguous substrings of equal length. Determine the minimum number 
// of characters to change to make the two substrings into anagrams of one another.

/**
 * 
 * @param {string} originalStr 
 * @returns {Number}
 */

// const anagram = (originalStr) => {
//     if(originalStr.length % 2 !== 0) return -1;
//     let arr1 = originalStr.substring(0,originalStr.length/2).split("");
//     let arr2 = originalStr.substring(originalStr.length/2).split("");
//     let rearrangeCount = 0;

//     for(let i=0;i<arr1.length;i++) {
//         let indexOfChar = arr2.indexOf(arr1[i]);
//         if(indexOfChar !== -1) {
//             delete arr2[indexOfChar];
//             console.log(arr2.length);
//             continue;
//         }
//         rearrangeCount++;
//     }
//     return rearrangeCount;
// }

const anagram = (originalStr) => {
    if(originalStr.length % 2 !== 0) return -1;

    const mid = originalStr.length / 2;
    let arr1 = originalStr.substring(0, mid);
    let arr2 = originalStr.substring(mid);

    let freq = {};

    // Count frequency of characters in arr1
    for (let char of arr1) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Decrease frequency for characters in arr2
    for (let char of arr2) {
        if (freq[char]) {
            freq[char]--;
        }
    }

    // Calculate the number of unmatched characters
    let rearrangeCount = 0;
    for (let char in freq) {
        rearrangeCount += freq[char];
    }

    return rearrangeCount;
};

console.log(anagram(priginalStr = "aaabaa"));