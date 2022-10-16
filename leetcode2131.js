/*
You are given an array of strings words. Each element of words consists of two lowercase English letters.

Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.

Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

A palindrome is a string that reads the same forward and backward.

 

Example 1:

Input: words = ["lc","cl","gg"]
Output: 6
Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
Note that "clgglc" is another longest palindrome that can be created.

*/

var longestPalindrome = function(words) {
let len = 0;
let map ={};
for (const word of words) {
if (!map[word]) map[word] = 1;
else {
  map[word] += 1;
}
}
let selfPalindrome =false;
for(let word of words){
    let reverse = word[1]+word[0];
    if(word===reverse){
        while(map[word]>=2){
            map[word]-=2;
            len+=4;
        }
    
    if(map[word]===1 && !selfPalindrome){
        selfPalindrome = true;
        len+=2;
        map[word]-=1
        
    }
    continue;
    
    }
    if(map[word]>0 && map[reverse]>0){
      map[word]-=1;
        map[reverse]-=1;
        len+=4
}
}
return len
};