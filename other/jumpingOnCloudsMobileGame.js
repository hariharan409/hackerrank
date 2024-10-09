// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. 
// The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . 
// The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. 
// It is always possible to win the game.
// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.
/**
 * 
 * @param {Array} c 
 */
const jumpingOnCloudsMobileGame = (c) => {
    let jumpCount = 0;
    let i=0;
    while(i < c.length - 1) {
        // console.log("c[i] : ",c[i]," Index : ",i);
        if(c[i] === 1) {
            i++;
            continue;
        }
        jumpCount++;
        let canDoubleJump = (c[i+1] === 0 && c[i+2] === 0);
        if(canDoubleJump) {
            i += 2;
            continue;
        }
        i++;
    }
    return jumpCount;
}

console.log(jumpingOnCloudsMobileGame(c = [0,0,1,0,0,1,0]));