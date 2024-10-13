
/**
 * 
 * @param {Array} arr 
 */
const findTheMedian = (arr) => {
    arr.sort((a,b) => a-b);
    let medianIndex = Math.floor(arr.length / 2);
    return arr[medianIndex];
}

console.log(findTheMedian([5,3,1,2,4]));