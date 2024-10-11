// nt n: the number of cities
// int c[m]: the indices of cities with a space station
/**
 * 
 * @param {Number} n 
 * @param {Array} c 
 */
const flatlandSpaceStations = (n,c) => {
    let maxDistanceList = [];
    for(let city=0;city<n;city++) {
        let spaceStationDistance = c.map((spaceStation) => Math.abs(city - spaceStation));
        maxDistanceList.push(Math.min(...spaceStationDistance));
    }
    return Math.max(...maxDistanceList);
}

console.log(flatlandSpaceStations(n=5,c=[0,4]));