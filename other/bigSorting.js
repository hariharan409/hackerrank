
/**
 * 
 * @param {Array} unsorted 
 */
const bigSorting = (unsorted) => {
    return unsorted.sort((a,b) => {
        if(a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    });
}

console.log(bigSorting(unsorted=["31415926535897932384626433832795","1",,"3","10","3",'5']));