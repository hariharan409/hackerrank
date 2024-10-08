// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .
/**
 * 
 * @param {Array} originalArr 
 * @returns {Number}
 */
const pickingNumbers = (originalArr) => {
    // Step 1: Create a frequency array to count occurrences of each number
    let frequency = new Array(101).fill(0);
    for(let num of originalArr) {
        frequency[num]++;
    }
    // Step 3: Find the longest subarray where the absolute difference between elements is <= 1
    let maxLength = 0;

    for (let i = 1; i < 101; i++) {
        // Compare each number's frequency with the next number's frequency (i and i-1)
        maxLength = Math.max(maxLength, frequency[i] + frequency[i - 1]);
    }

    return maxLength;
}

console.log(pickingNumbers([4,6,5,3,3,1]));