
/**
 * 
 * @param {Number} p 
 * @param {Number} d 
 * @param {Number} m 
 * @param {Number} s 
 * @returns {Number}
 */
// int p: the price of the first game
// int d: the discount from the previous game price
// int m: the minimum cost of a game
// int s: the starting budget
const halloweenSale = (p,d,m,s) => {
    let gameCount = 0;
    let currentPrice = p;

    while( s >= currentPrice) {
        s -= currentPrice;
        gameCount++;
        currentPrice = Math.max(currentPrice - d,m);
    }
    return gameCount;
}

console.log(halloweenSale(p=20,d=3,m=6,s=80));