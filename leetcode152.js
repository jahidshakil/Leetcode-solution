/*
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/


var maxProduct = function (nums) {
    let res = nums[0];
    let curMax = 1;
    let curMin = 1;
    let prevMax =1;
    for(let num of nums){
        prevMax = curMax*num;
        curMax = Math.max(prevMax ,num, curMin*num);
        curMin = Math.min(prevMax, num, curMin*num);
        res = Math.max(res,curMax); 
    }
    return res;
};

