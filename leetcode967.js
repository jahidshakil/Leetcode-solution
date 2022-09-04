/*
Return all non-negative integers of length n such that the absolute difference between every two consecutive digits is k.

Note that every number in the answer must not have leading zeros. For example, 01 has one leading zero and is invalid.

You may return the answer in any order.

 

*/


var numsSameConsecDiff = function(n, k) {
    let list =[1,2,3,4,5,6,7,8,9];
    while(--n>0){
        let temp =[];
        for(let i of list){
            let rem = i % 10;
            if(rem+k < 10) temp.push(10*i + rem+k);
            if(k!==0 && rem-k>=0) temp.push(i*10 + rem-k)
            
            
        }
        list=temp
    }
    return list
};