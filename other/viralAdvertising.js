
/**
 * 
 * @param {Number} n 
 */
const viralAdvertising = (n) => {
    let totalLikes = 0;
    let peopleReached = 5;
    for(let i=1;i<=n;i++) {
         // Half of the people like the ad
        let likesToday = Math.floor(peopleReached/2);
        /* Concat the likesToday and totalLikes */
        totalLikes += likesToday;
        // Each person who likes the ad shares it with 3 more people
        peopleReached = likesToday * 3;
    }
    return totalLikes;
}

console.log(viralAdvertising(n = 5));