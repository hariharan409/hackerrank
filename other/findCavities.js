
/**
 * 
 * @param {Array} grid 
 */
const findCavities = (grid) => {
    let n = grid.length;
    // Convert each row string to an array of characters for easier manipulation
    let resultGrid = grid.map((row) => row.split(""));
    for(let i=1;i<n-1;i++) { // Exclude the border rows
        for(let j=1;j<(grid[i].length - 1);j++) { // Exclude the border columns
            let currentDepth = grid[i][j];
            if(
                currentDepth > grid[i - 1][j] &&  // Top
                currentDepth > grid[i + 1][j] &&  // Bottom
                currentDepth > grid[i][j - 1] &&  // Left
                currentDepth > grid[i][j + 1]     // Right
            ) {
                resultGrid[i][j] = 'X';  // Mark as cavity
            }
        }
    }
    // Join each row array back into strings
    return resultGrid.map(row => row.join(''));
}

console.log(findCavities(grid=["1112","1912","1892","1234"]));