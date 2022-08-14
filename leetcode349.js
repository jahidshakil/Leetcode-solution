/* Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 */



var intersection = function (nums1, nums2) {
    let result =[];
    let set1 = new Set(nums1);
    let set2 =new Set(nums2);
    for(let val of set1){
        if(set2.has(val)){
            result.push(val)
        }
    }
    return result
    
};