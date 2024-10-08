
// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?
/**
 * 
 * @param {Number} n 
 */
const utopianTree = (n) => {
    /* A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring */
    let height = 1;
    for(let i=1;i<=n;i++) {
        if(i%2 !== 0) {
            /* Finished spring and enter into summer. So the value should be doubled */
            height *= 2;
        } else {
            /* Finished summer and enter into winter. So the value should be increased by 1 */
            height += 1;
        }
        console.log(`period - ${i} , value - ${height}`);
    }
    return height;
}

console.log(utopianTree(n = 5));