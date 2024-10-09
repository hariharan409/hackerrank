
/**
 * 
 * @param {Array} arr 
 */
const equalizeTheArray = (arr) => {
    let frequencyObj = {};
    let deletionCount = 0;
    for(let num of arr) {
        frequencyObj[num] = (frequencyObj[num] || 0)+ 1;
    }
    let maxRepeatedCount = Math.max(...Object.values(frequencyObj));
    deletionCount = arr.length - maxRepeatedCount;
    return deletionCount;
}

console.log(equalizeTheArray(arr = [1,2,2,3]));