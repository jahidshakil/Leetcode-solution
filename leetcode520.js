
 /*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.
 */

var detectCapitalUse = function (word) {
    let count = 0;
    let pos =0;
    for(let i=0; i<word.length; i++){
        if(word[i] >= 'A' && word[i] <= 'Z'){
            count++;
            pos = i;
        }
    }
    if(count == word.length || count == 0 || (count==1 && pos==0)){
        return true;
    }
    return false;
};
