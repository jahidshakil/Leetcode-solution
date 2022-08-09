
/* 823. Binary Trees With Factors
Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1.

We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children.

Return the number of binary trees we can make. The answer may be too large so return the answer modulo 109 + 7. */


var numFactoredBinaryTrees = function(arr) {
    const map = new Map();
    arr.sort((a,b)=> a-b);
    for(let i =0; i<arr.length; i++){
        let count =1;
        for(let j=0; j<i; j++){
            if (arr[i] % arr[j] === 0 && map.has(Math.floor(arr[i] / arr[j]))) {
               count += map.get(arr[j]) * map.get(Math.floor(arr[i] / arr[j]));
             }
        }
         map.set(arr[i], count);
    }
    let total = 0;
    for(let v of map.values()){
        total+=v
    }
    return total % (10**9 + 7)
    
};