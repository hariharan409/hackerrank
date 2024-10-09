
/**
 * 
 * @param {Array} arr 
 */
const cutTheSticks = (arr) => {
    let iterateLeftStick = [];
    iterateLeftStick.push(arr.length);
    while(arr.length > 0) {
        let smallStick = Math.min(...arr);
        arr = arr.map((ele) => ele - smallStick).filter((ele) => ele > 0);
        if(arr.length > 0) {
            iterateLeftStick.push(arr.length);
        }
    }
    return iterateLeftStick;
}

console.log(cutTheSticks(arr = [1,2,3]));