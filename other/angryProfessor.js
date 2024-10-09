
/**
 * 
 * @param {Number} k 
 * @param {Array} a 
 */
const angryProfessor = (k,a) => {
    // Count how many students arrived on time or early (arrival time <= 0)
    const onTimeStudents = a.filter(time => time <= 0).length;
    // If the number of on-time students is less than the threshold k, class is canceled
    return onTimeStudents < k ? "YES" : "NO";
}

console.log(angryProfessor(k=3,a=[-2,-1,0,1,2]));