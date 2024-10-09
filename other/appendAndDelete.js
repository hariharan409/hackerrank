
/**
 * 
 * @param {Array} s 
 * @param {Array} t 
 * @param {Number} k 
 */
const appendAndDelete = (s,t,k) => {
    let commonLength = 0;
    // Find the length of the common prefix
    for(let i=0;i<Math.min(s.length,t.length);i++) {
        if(s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }
    // Total number of characters to delete from s and append to make t
    let totalOperations = (s.length - commonLength) + (t.length - commonLength);
    // Case where k is enough to delete and reappend the entire string
    if (totalOperations <= k && (k - totalOperations) % 2 === 0) {
        return "Yes";
    }

    // If k is large enough to delete the entire string and rewrite it
    if (s.length + t.length <= k) {
        return "Yes";
    }
    return "No";
}

console.log(appendAndDelete(s=['a','b','c'],t=['d','e','f'],k=6));