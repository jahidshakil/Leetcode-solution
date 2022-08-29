/*
Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
*/
var topKFrequent = function(words, k) {
    let map ={};
    let temp = words.sort()
    for(let i of temp){
        if(map[i]){
            map[i]+=1;
        }else{
            map[i]=1;
        }
        var ordered = Object.keys(map).sort((a,b)=> map[b]-map[a]);
    }
    
    return ordered.slice(0,k)
    
};