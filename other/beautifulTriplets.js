// int d: the value to match
// int arr[n]: the sequence, sorted ascending
/**
 * 
 * @param {Number} d 
 * @param {Array} arr 
 */
// const beautifulTriplets = (d,arr) => {
//     let beautyCount = 0;
//     for(let i=0;i<arr.length-2;i++) {
//         for(let j=i+1;j<arr.length-1;j++) {
//             for(let k=j+1;k<arr.length;k++) {
//                 if(arr[i] < arr[j] && arr[j] < arr[k]) {
//                     if((arr[j] - arr[i]) === d && (arr[k] - arr[j] === d)) {
//                         beautyCount++;
//                     }
//                 }
//             }
//         }
//     }
//     return beautyCount;
// }

const beautifulTriplets = (d,arr) => {
    let beautyCount = 0;

    // Use a set for faster lookups
    const valuesSet = new Set(arr);

    // Iterate through each element
    for (let i = 0; i < arr.length; i++) {
        // Check if both arr[i] + d and arr[i] + 2d exist in the array
        if (valuesSet.has(arr[i] + d) && valuesSet.has(arr[i] + 2 * d)) {
            beautyCount++;
        }
    }
    return beautyCount;
}

console.log(beautifulTriplets(d=3,arr=[1,2,4,5,7,8,10]));