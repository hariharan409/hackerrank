
/**
 * 
 * @param {Number} a 
 * @param {Number} b
 * @returns {Number} 
 */
const sherlockAndSquares = (a,b) => {
    // Find the smallest integer greater than or equal to sqrt(a)
    let start = Math.ceil(Math.sqrt(a));

    // Find the largest integer less than or equal to sqrt(b)
    let end = Math.floor(Math.sqrt(b));

    // The count of square integers between start^2 and end^2 (inclusive)
    return end - start + 1;
}

console.log(sherlockAndSquares(a=24,b=49));