/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b

*/


var findClosestElements = (arr, k, x) => {
    let left =0; 
    let right = arr.length-1;
    while(right-left>=k){
        if(Math.abs(x-arr[left]) <= Math.abs(x-arr[right])){
            right--
        }else{
            left++
        }
    }
    return arr.slice(left, right+1);
}