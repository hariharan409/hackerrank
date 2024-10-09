
/**
 * 
 * @param {Number} b 
 * @param {Number} w 
 * @param {Number} bc 
 * @param {Number} wc 
 * @param {Number} z 
 * @returns {Array}
 */
// int b: the number of black gifts
// int w: the number of white gifts
// int bc: the cost of a black gift
// int wc: the cost of a white gift
// int z: the cost to convert one color gift to the other color
const taumAndBirthday = (b,w,bc,wc,z) => {
     // Calculate the minimum cost for black and white gifts
     const blackCost = BigInt(b) * BigInt(Math.min(bc, wc + z));
     const whiteCost = BigInt(w) * BigInt(Math.min(wc, bc + z));
 
     // Return the total minimum cost
     return blackCost + whiteCost;
}

console.log(taumAndBirthday(b=7,w=7,bc=4,wc=2,z=1));