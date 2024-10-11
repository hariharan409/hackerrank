
/**
 * 
 * @param {Array} arr 
 */
// const minAbsDistance = (arr) => {
//     let minDistance = Number.MAX_VALUE;
//     for(let i=0;i<arr.length;i++) {
//         for(let j=i+1;j<arr.length;j++) {
//             let distance = Math.abs(arr[i] - arr[j]);
//             minDistance = Math.min(minDistance,distance); 
//         }
//     }
//     return minDistance;
// }

const minAbsDistance = (arr) => {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    // Step 2: Initialize the minimum difference to a large value
    let minDiff = Infinity;

    // Step 3: Iterate through the sorted array and find the minimum difference
    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
}

console.log(minAbsDistance(arr=[-2,2,4]));