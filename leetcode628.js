/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

*/

var maximumProduct = function(nums) {
    
    nums=nums.sort((a,b)=>a-b);
    let n=nums.length;
    
    let p = nums[n-3]*nums[n-2]*nums[n-1];
    
    let q= nums[0]*nums[1]*nums[n-1];
    
    return Math.max(p,q);

};