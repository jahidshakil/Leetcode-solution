/*

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/


var searchRange = function (nums, target) {
    let low = 0, high = nums.length-1, mid;
    
    // find the start
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] >= target) high = mid-1;
        else low = mid+1;
    }
    
    // if target doesn't exist
    if(nums[low] !== target) return [-1, -1];
    
    const start = low;
    
    // reset low and high
    low = 0, high = nums.length-1;
    
    // find the end
    while(low <= high) {
        mid = Math.floor((low+high)/2);
        if(nums[mid] <= target) low = mid+1;
        else high = mid-1;
    }
    return [start, high];
};