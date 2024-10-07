// Given two arrays of integers, find which elements in the second array are missing from the first array.
// The  array is the orginal list. The numbers missing are .
// Notes
// If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. 
// If that is not the case, then it is also a missing number.
// Return the missing numbers sorted ascending.
// Only include a missing number once, even if it is missing multiple times.
// The difference between the maximum and minimum numbers in the original list is less than or equal to .

/**
 * @param {Array} arr
 * @param {Array} brr
 */
const missingNumbers = (arr,brr) => {
    /* WE ARE GOING TO USE FREQUENCY COUNT */
    let frequency = {};
    /* ORIGINAL HASH TABLE */
    for(let num of brr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for(let num of arr) {
        if(frequency[num]) {
            frequency[num]--;
        }
    }

    let missingNumbers = [];

    for(let num in frequency) {
        if(frequency[num] > 0) {
            missingNumbers.push(parseInt(num));
        }
    }
    return missingNumbers.sort((a,b) => a-b);
}

console.log(missingNumbers(arr = [7,2,5,3,5,3],brr = [7,2,5,4,6,3,5,3]));