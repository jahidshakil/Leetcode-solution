/* 
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 */



var canConstruct = function (ransomNote, magazine) {
    let cache = {};
    for(let i of magazine){
        cache[i] = (cache[i] || 0) +1;
    }
    for(let j of ransomNote){
        if(!cache[j]){
            return false
        }
        cache[j]--
    }return true
};