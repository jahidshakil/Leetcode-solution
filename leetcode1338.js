/* You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

Return the minimum size of the set so that at least half of the integers of the array are removed.

*/

var minSetSize = function(arr) {
    let obj ={};
    let len = arr.length;
    for(let i = 0; i < len; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }else{
         obj[arr[i]]=1   
        }
        }
    
    let uniqueCounters = Object.values(obj).sort((a, b) => b - a);
     let counter = 1, sum = uniqueCounters[0]
    while(sum<len/2){
        sum+=uniqueCounters[counter];
        counter++
    }
     
    return counter
    
};