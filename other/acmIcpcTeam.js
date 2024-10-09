
/**
 * 
 * @param {Array} topics 
 */
const acmIcpcTeam = (topics) => {
    let maxTopics = 0; // Store the maximum number of topics any team knows
    let teamCount = 0; // Store how many teams know that maximum number of topics
    for(let i=0;i<topics.length - 1;i++) {
        for(let j=i+1;j<topics.length;j++) {
            // Compute the bitwise OR of the two attendees' knowledge strings
            let knownTopics = 0;
            for(let k=0;k<topics[i].length;k++) {
                if(topics[i][k] === "1" || topics[j][k] === "1") {
                    knownTopics++;
                }
            }
            // If this pair knows more topics than the current max, update maxTopics and reset the count
            if(knownTopics > maxTopics) {
                maxTopics = knownTopics;
                teamCount = 1;
            } else if(knownTopics === maxTopics) {
                // If this pair knows the same number of topics as the current max, increment the count
                teamCount++;
            }
        }
    }
    return [maxTopics,teamCount];
}

console.log(acmIcpcTeam(topics = ['10101','11110','00010']));