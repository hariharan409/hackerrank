
/**
 * 
 * @param {Number} d1 
 * @param {Number} m1 
 * @param {Number} y1 
 * @param {Number} d2 
 * @param {Number} m2 
 * @param {Number} y2 
 * @returns {Number}
 */
/* d1,m1,y1 -> returned date */
/* d2,m2,y2 -> due date */
const libraryFine = (d1,m1,y1,d2,m2,y2) => {
    let fineAmt = 0;
    if((y1 > y2)) {
        fineAmt = 10000;
    } else if(y1 === y2) {
        if(m1 > m2) {
            // M1 - M2 -> DIFFERENCE BETWEEN NUMBER OF MONTHS. ALSO M1 IS ALWAYS GREATER THAN M2
            fineAmt = 500 * (m1 - m2);
        } else if(m1 === m2 && d1 > d2) {
            // D1 - D2 -> DIFFERENCE BETWEEN NUMBER OF DATES. ALSO D1 IS ALWAYS GREATER THAN D2
            fineAmt = 15 * (d1 - d2);
        }
    }
    return fineAmt;
}

console.log(libraryFine(d1=14,m1=7,y1=2018,d2=5,m2=7,y2=2018));