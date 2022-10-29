/*
Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

*/





// var canPartition = function(nums) {
//     var sum = nums.reduce((a, b) => a + b);
//     if(sum % 2 === 1) return false;
//     var target = sum / 2;
//     var dp = new Array(target + 1).fill(0);
//     for(var i = 0; i < nums.length; i++) {
//         for(var j = target; j >= nums[i]; j--) {
//             dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
//         }
//     }
//     return dp[target] === target;
// };


var canPartition = function(nums){
    let sum = 0;
    for(let i =0; i<nums.length; i++){
        sum+=nums[i]
    }
    if(sum%2===1) return false;
    let target = sum/2;
    let dp =new Array(target+1).fill(0);
    for(let i=0; i<nums.length; i++){
        for(let j =target; j>=nums[i]; j--){
            dp[j] = Math.max(dp[j], dp[j-nums[i]] + nums[i])
        }
    }
    return  dp[target]===target
}