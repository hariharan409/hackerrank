// Given a sequence of  integers,  where each element is distinct and satisfies . For each  where , that is  increments from  to , 
// find any integer  such that  and keep a history of the values of  in a return array.
/**
 * 
 * @param {Array} p
 * @returns {Array} 
 */
const sequenceEquation = (p) => {
    let finalArr = [];
    /* THIS PROBLEM IS 1 BASED. SO ADD THE INDEX + 1 */
    for(let i=1;i<=p.length;i++) {
        let k = p.indexOf(i) + 1;
        finalArr.push(p.indexOf(k) + 1);
    }
    return finalArr;
}

console.log(sequenceEquation(p=[5,2,1,3,4]));