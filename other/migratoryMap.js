
/**
 * @param {Array} birdList
 * @returns {Number}
 */
const migratoryMap = (birdList) => {
    let frequencyObj = {};

    birdList.forEach((bird) => {
        frequencyObj[bird] = (frequencyObj[bird] || 0) + 1;
    });

    let maxCount = 0;
    let birdWithMaxCount = Number.MAX_SAFE_INTEGER;

     // Find the bird with the highest frequency (and smallest ID in case of a tie)
     for (let bird in frequencyObj) {
        let birdType = parseInt(bird);  // Convert string key to number
        let count = frequencyObj[birdType];

        if (count > maxCount || (count === maxCount && birdType < birdWithMaxCount)) {
            maxCount = count;
            birdWithMaxCount = birdType;
        }
    }

    return birdWithMaxCount;
}

console.log(migratoryMap([1,1,2,2,3]));