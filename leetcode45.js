/* Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.
*/

var jump = function(nums) {
    if(nums.length===1) return 0;
    let max = 0;
    let curr =0;
    let jump=0;
    for(let i =0; i<nums.length-1; i++){
        max = Math.max(max, nums[i]+i);
        if(i==curr){
            jump++;
            curr=max;
        }
     
    }
    return jump;
};
