/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.*/

var moveZeroes = function(nums) {
    let  i =0;
    let len = nums.length;
    while(i<len){
        if(nums[i] ===0) nums.splice(i,1)
        else i++
    }
    for(let i=0; i<len; i++){
        if(nums[i]===undefined) nums.push(0)
    }
    
}