
/**
 * 
 * @param {Array} a 
 */
const minimumDistances = (a) => {
    let minDistance = Number.POSITIVE_INFINITY;
    for(let i=0;i<a.length-1;i++) {
        for(let j=i+1;j<a.length;j++) {
            if(a[i] === a[j]) {
                minDistance = Math.min(minDistance,j-i);
            }
        }
    }
    if(minDistance === Infinity) {
        return -1;
    }
    return minDistance;
}

console.log(minimumDistances(a=[1,2,3,4,5]));