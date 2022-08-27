/* 
Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.

It is guaranteed that there will be a rectangle with a sum no larger than k.

 Input: matrix = [[1,0,1],[0,-2,3]], k = 2
Output: 2
Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
*/

var maxSumSubmatrix = (m, k) => {
    let maxTop = 0, maxBottom=0, maxLeft=0, maxRight = 0, max=-Infinity;
    let rows = m.length, columns =m[0].length;
    
    for(let l=0; l<columns; l++){
        let SumsArray = Array(rows).fill(0);
        for(let r=l; r<columns; r++){
            if (r>=columns) break;
            for(let row =0; row<rows; row++){
              SumsArray[row]+=m[row][r];
            }
        for(let i=0; i<rows;i++){
            let sum = 0;
            for(let j = i; j<rows;j++){
                sum+=SumsArray[j];
                if(sum>max && sum<=k){
                    maxTop =i;
                    maxBottom=j;
                    maxLeft = l;
                    maxRight=r;
                    max=sum;
                    
                }
            }
        }
        }
    }
    return max;
}
