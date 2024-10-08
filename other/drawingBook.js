

/**
 * 
 * @param {Number} n 
 * @param {Number} p
 * @returns {Number} 
 */
const drawingBook = (n,p) => {
    // Calculate the turns from the front
    let turnsFromFront = Math.floor(p/2);
    // Calculate the turns from the back
    let turnsFromBack = Math.floor(n/2) - Math.floor(p/2);

    return Math.min(turnsFromFront,turnsFromBack);

}

console.log(drawingBook(n=5,p=1))