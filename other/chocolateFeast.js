
/**
 * 
 * @param {Number} n 
 * @param {Number} c 
 * @param {Number} m 
 */
// int n: Bobby's initial amount of money
// int c: the cost of a chocolate bar
// int m: the number of wrappers he can turn in for a free bar
const chocolateFeast = (n,c,m) => {
    let chocolatesEaten = Math.floor(n / c);  // Initial chocolates bought
    let wrappers = chocolatesEaten;  // Initial wrappers

    while (wrappers >= m) {
        let freeChocolates = Math.floor(wrappers / m);
        chocolatesEaten += freeChocolates;  // Add the free chocolates
        wrappers = freeChocolates + (wrappers % m);  // New wrappers from free chocolates + remainder wrappers
    }

    return chocolatesEaten;
}

console.log(chocolateFeast(n=15,c=3,m=2));