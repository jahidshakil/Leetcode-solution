/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

*/



var merge = function (intervals) {
    intervals.sort((a,b)=> a[0]-b[0]);
    let ans =[intervals[0]];
    
    for(let interval of intervals){
        let e1 = ans[ans.length-1][1];
        let s2 = interval[0];
        let e2 = interval[1];
        if(e1>=s2){
            ans[ans.length-1][1] = Math.max(e1,e2);
            
        }else{
            ans.push(interval)
        }
    }
    return ans
};