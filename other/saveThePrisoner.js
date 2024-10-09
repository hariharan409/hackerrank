
/**
 * 
 * @param {Number} n Number of prisoners
 * @param {Number} m Number of candy
 * @param {Number} s Distribution starts at
 * @returns {Number} Chair number of the prisoners to warn
 */
// const saveThePrisoner = (n,m,s) => {
//     let prisonerToWarn = null;
//     for(let i=0;i<m;i++) {
//         if(!prisonerToWarn) {
//             prisonerToWarn = s;
//             continue;
//         }
//         if(prisonerToWarn === n) {
//             prisonerToWarn = 1;
//         } else {
//             prisonerToWarn++;
//         }
//     }
//     return prisonerToWarn;
// }

const saveThePrisoner = (n,m,s) => {
    return ((s-1+m) % n) || n;
}

console.log(saveThePrisoner(n=4,m=6,s=2));