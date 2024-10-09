
/**
 * 
 * @param {Array} c 
 * @param {Number} k 
 */
const jumpingOnClouds = (c,k) => {
    let energyLevel = 100;
    let i = 0;
    let n = c.length;
    while(true) {
        /* 1 unit of energy consumes to make a jump(technically 1 iteration) */
        energyLevel--;
        /* if value === 1 then it is considered as thunderhead */
        if(c[i] === 1) {
            energyLevel -= 2;
        }
        console.log((i+k) % n);
        i = (i+k) % n;
        if(i === 0) {
            return energyLevel;
        };
    }
}

console.log(jumpingOnClouds(c=[1,1,1,0,1,1,0,0,0,0],k=2));