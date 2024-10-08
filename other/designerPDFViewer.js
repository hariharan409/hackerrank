
/**
 * 
 * @param {Array} h 
 * @param {String} word 
 * @returns {Number}
 */
const designerPDFViewer = (h,word) => {
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";  
    let rectangleWidth = word.length;
    let rectangleHeight = 0;
    for(const char of word) {
        let index = englishAlphabet.indexOf(char);
        if(h[index] > rectangleHeight) {
            rectangleHeight = h[index];
        }
    }
    let areaOfRectangle = rectangleWidth * rectangleHeight;
    return areaOfRectangle; 
}

console.log(designerPDFViewer(h = [1,3,1,3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5],word = "torn"));