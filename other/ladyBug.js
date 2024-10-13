
/**
 * 
 * @param {String} b 
 */
const ladyBug = (b) => {
    if(b.replaceAll("_","").length === 0) {
        return "YES";
    }
    if(!(b.split("").filter((char) => char === "_").length >= 1)) {
        return "NO";
    }
    for(let i=0;i<b.length;i++) {
        if(!(b[i] === "_")) {
            if(!(b.split("").filter((char) => char === b[i]).length > 1)) {
                return "NO";
            }
        }
    }
    return "YES";
}

console.log(ladyBug(b="AABBC"));