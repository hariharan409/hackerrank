
/**
 * @param {String} originalStr
 * @returns {Number}
 */
const beautifulBinaryString = (originalStr) => {
    let originalArr = originalStr.split("");
    let notBeauty = "010";
    let modifyCount = 0;
    for(let i=0;i<originalArr.length;i++) {
        let subStr = originalArr.slice(i,i+3).join(""); // 0 IS INCLUSIVE AND 3 IS EXCLUSIVE. SO INDEX COUNT IS NOT 4, ONLY 3
        console.log(subStr);
        if(subStr === notBeauty) {
            originalArr[i+2] = (originalArr[i+2] === "1" ? "0" : "1");
            modifyCount++;
        }
    }
    return modifyCount;
}

console.log(beautifulBinaryString(originalStr = "0101010"));