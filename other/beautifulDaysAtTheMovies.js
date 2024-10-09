/**
 * 
 * @param {Number} i the starting day number
 * @param {Number} j the ending day number
 * @param {Number} k the divisor
 */
const beautifulDaysAtTheMovies = (i,j,k) => {
    let beautifulDayCount = 0;
    for(let day=i;day<=j;day++) {
        let reverse = parseInt(day.toString().split("").reverse().join(""));
        if((day - reverse) % k === 0) {
            beautifulDayCount++;
        }
    }
    return beautifulDayCount;
}

console.log(beautifulDaysAtTheMovies(i=20,j=23,k=6));