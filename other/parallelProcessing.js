
/**
 * @param {Array} filesArr
 * @param {Number} numCores
 * @param {Number} limit
 * @returns {Number}
 */
const parallelProcessing = (filesArr,numCores,limit) => {
    let sortedFilesArr = filesArr.sort((a,b) => b-a); 
    let parallelCount = 0;
    let executionTimeCount = 0;

    for(let file of sortedFilesArr) {
        let tempNum = 0;
        if((file % numCores === 0) && (parallelCount < limit)) {
            tempNum = (file / numCores);
            parallelCount++;
        } else {
            tempNum = file;
        }
        executionTimeCount += tempNum;
    }
    return executionTimeCount;
}

console.log(parallelProcessing(filesArr = [4,1,3,2,8],numCores = 4,limit = 1));