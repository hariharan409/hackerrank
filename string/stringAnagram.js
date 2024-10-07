

function stringAnagram(dictionary, query) {
    let finalArr = [];
    for(let word of dictionary) {
        let tempCount = 0;
        let sortedStr = word.split("").sort().join("");
        for(let qr of query) {
            let sortedQr = qr.split("").sort().join("");
            if(sortedStr === sortedQr) {
                tempCount++;
            }
        }
        finalArr.push(tempCount);
    }
    return finalArr;
}

// optimized solution using hash map

function stringAnagram(dictionary,query) {
    let finalArr = [];
    let sortedDictMap = {};

    // Preprocess the dictionary
    for (let dict of dictionary) {
        let sortedDict = dict.split("").sort().join("");
        sortedDictMap[sortedDict] = (sortedDictMap[sortedDict] || 0) + 1;
    }

    // Check the query
    for (let word of query) {
        let sortedStr = word.split("").sort().join("");
        finalArr.push(sortedDictMap[sortedStr] || 0); // If no match, default to 0
    }

    return finalArr;
}

console.log(stringAnagram());