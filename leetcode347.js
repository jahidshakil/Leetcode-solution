/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

var topKFrequent = function(nums, k) {
    let result={};
    for(let i=0;i<nums.length;i++){
        if(!result[nums[i]]){
            result[nums[i]]=1;
        }
        else {
            result[nums[i]]+=1
        }
    }
    const maxValue = Object.entries(result).sort((x, y) => y[1] - x[1]);
    let res=[];
    for(let j=0;j<maxValue.length;j++){
        res.push(maxValue[j][0]);
    }
    return res.slice(0,k);
};