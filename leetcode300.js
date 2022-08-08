/* 
Longest Increasing Subsequence

Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]. */

var lengthOfLIS = function(nums) {
    let max = 1;
    let array = Array(nums.length).fill(1);
    for(let i =1; i<nums.length; i++){
        for(let j =0; j<i; j++){
            if(nums[i]>nums[j]){
                array[i] = Math.max(array[i], 1+array[j])
                max = Math.max(max, array[i]);
            }
        }
    }
    return max
};


