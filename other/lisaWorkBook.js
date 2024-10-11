
/**
 * 
 * @param {Number} n 
 * @param {Number} k 
 * @param {Array} arr 
 * @returns {Number}
 */
// int n: the number of chapters
// int k: the maximum number of problems per page
// int arr[n]: the number of problems in each chapter
// TOFIND: a problem to be special if its index (within a chapter) is the same as the page number where it's located
const lisaWorkBook = (n,k,arr) => {
    let currentPage = 1; // Start from page 1
    let specialProblem = 0;

    for(let chapter = 0; chapter < n; chapter++) {
        let problemsInChapter = arr[chapter];
        // Iterate over problems in current chapter, placing them on pages
        for(let problem=1;problem<=problemsInChapter;problem++) {
            if(problem === currentPage) {
                specialProblem++; // The problem index matches the page number
            }
            // Check if we've filled the current page
            if(problem % k === 0 || problem === problemsInChapter) {
                currentPage++; // Move to the next page after `k` problems or when chapter ends
            }
        }
    }
    
    return specialProblem;
}

console.log(lisaWorkBook(n=5,k=3,arr=[4,2,6,1,10]));