/*
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 */




var thirdMax = function (nums) {
    
    nums.sort((a,b) => a-b);
    let set = new Set(nums);
    let arr = Array.from(set.values());
    if(arr.length<2) return arr[0];
    if(arr.length<3) return arr[1];
    return arr[arr.length-3];
    
};