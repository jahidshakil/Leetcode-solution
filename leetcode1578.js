







/*
Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.

Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.

Return the minimum time Bob needs to make the rope colorful.

 Input: colors = "abaac", neededTime = [1,2,3,4,5]
Output: 3
Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
Bob can remove the blue balloon at index 2. This takes 3 seconds.
There are no longer two consecutive balloons of the same color. Total time = 3.
*/






var minCost = function (colors, neededTime) {
    let l = 0;
    let r =0;
    let totalTime =0;
    let n = colors.length;
    while(l<n && r<n){
        let max=0;
        let currTotal = 0;
        while(r<n && colors[l]==colors[r]){
            max = Math.max(max, neededTime[r]);
            currTotal+=neededTime[r];
            r++
        }
        l=r;
        totalTime +=(currTotal-max); 
    }
    return totalTime;
    
};