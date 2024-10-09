
/**
 * 
 * @param {String} s 
 * @param {Number} n 
 */
// const repeatedString = (s,n) => {
//     let repeatedString = s.repeat(Math.ceil(n/s.length)).slice(0,n);
//     return repeatedString.split("").filter((char) => char === "a").length;
// }

const repeatedString = (s,n) => {
    // Step 1: Count 'a' in the input string
    const countAInS = (s.match(/a/g) || []).length;

    // Step 2: Calculate full repetitions of the string
    const fullRepetitions = Math.floor(n / s.length);
    
    // Step 3: Calculate total 'a' from full repetitions
    let totalCount = countAInS * fullRepetitions;

    // Step 4: Handle remaining characters
    const remainderLength = n % s.length;
    const remainderString = s.slice(0, remainderLength);
    totalCount += (remainderString.match(/a/g) || []).length;

    return totalCount;
}

console.log(repeatedString(s="abc",n=10));