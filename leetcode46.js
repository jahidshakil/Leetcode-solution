/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 
*/


const permute = function (nums) {
    let res = [];
     let dfs =(i,nums)=>{
         if(i==nums.length){
             res.push(nums.slice());
             return;
         }
         for(let j=i;j<nums.length;j++){
             [nums[i],nums[j]]=[nums[j],nums[i]];
             dfs(i+1,nums);
             [nums[i],nums[j]]=[nums[j],nums[i]];
 
         }
     }
     dfs(0,nums);
     return res;
 };