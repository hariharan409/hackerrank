
/**
 * 
 * @param {Array} arr 
 */
// const closestNumbers = (arr) => {
//     let smallestDiff = Number.MAX_VALUE;
//     let smallestAbsDiffList = [];

//     for(let i=0;i<arr.length - 1;i++) {
//         for(let j=i+1;j<arr.length;j++) {
//             let diff = Math.abs(arr[i] - arr[j]);
//             if(diff === smallestDiff) {
//                 smallestAbsDiffList.push(arr[i],arr[j]);
//             } else if(diff < smallestDiff) {
//                 smallestDiff = diff;
//                 smallestAbsDiffList = [];
//                 smallestAbsDiffList.push(arr[i],arr[j]);
//             }
//         }
//     }
//     return smallestAbsDiffList.sort((a,b) => a-b);
// }
const closestNumbers = (arr) => {
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    // Step 2: Initialize minimum difference
    let minDiff = Infinity;
    let result = [];

    // Step 3: Find the minimum absolute difference
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i + 1] - arr[i]);
        if (diff < minDiff) {
            minDiff = diff;
            result = [arr[i], arr[i + 1]]; // Reset result with the new smallest pair
        } else if (diff === minDiff) {
            result.push(arr[i], arr[i + 1]); // Add pair with the same minimum difference
        }
    }

    return result;
}

console.log(closestNumbers([5,2,3,4,1]));