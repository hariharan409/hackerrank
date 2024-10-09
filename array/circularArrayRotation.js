// int a[n]: the array to rotate
// int k: the rotation count
// int queries[1]: the indices to report
/**
 * 
 * @param {Array} a 
 * @param {Number} k 
 * @param {Array} queries
 * @returns {Array} 
 */
const circularArrayRotation = (a,k,queries) => {
    for(let i=0;i<k;i++) {
        a.unshift(a.pop());
    }
    let finalArr = queries.map((query) => a[query]);
    return finalArr;
}

console.log(circularArrayRotation(a=[3,4,5],k=2,queries=[1,2]));