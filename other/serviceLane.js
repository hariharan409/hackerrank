// serviceLane has the following parameter(s):

// int n: the size of the  array
// int cases[t][2]: each element contains the starting and ending indices for a segment to consider, inclusive
// Returns

// int[t]: the maximum width vehicle that can pass through each segment of the service lane described
/**
 * 
 * @param {Array} n 
 * @param {Array} cases 
 */
const serviceLane = (n,cases) => {
    let maxWidthVehicleList = [];
    for(let arr of cases) {
        const startingPoint = arr[0];
        const endingPoint = arr[1];
        const vehicleWidth = n.slice(startingPoint,endingPoint + 1);
        let maxWidth = Math.min(...vehicleWidth);
        maxWidthVehicleList.push(maxWidth);
    }
    return maxWidthVehicleList;
}

console.log(serviceLane(n=[2,3,1,2,3,2,3,3],cases=[[0,3],[4,6],[6,7],[3,5],[0,7]]));