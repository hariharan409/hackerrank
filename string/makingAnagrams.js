/**
 * @param {String} s1
 * @param {String} s2
 */

const makingAnagrams = (s1,s2) => {
    let frequency = {};
    /* Adding characters into the frequency table */
    for(let char of s1) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    let deletionCharCount = 0;
    /* Checking s2 characters and if it have s1 char, going to remove it else count the s2 char */
    for(let char of s2) {
        if(frequency[char] && frequency[char] > 0) {
            frequency[char]--;
        } else {
            deletionCharCount++;
        }
    }
    /* Count the values and that would be the deletion characters to make an anagram */
    for(let char in frequency) {
        deletionCharCount += frequency[char];
    }
    return deletionCharCount;
}

console.log(makingAnagrams(s1 = "absdjkvuahdakejfnfauhdsaavasdlkj", s2 = "djfladfhiawasdkjvalskufhafablsdkashlahdfa"));

