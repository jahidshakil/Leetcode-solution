
/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
*/



var generateMatrix = function (n) {
    const mat = new Array(n).fill().map(() => new Array(n).fill());
    let val =1;
    let top = 0;
    let bottom = n-1;
    let left = 0;
    let right = n-1;
    while(val<=n*n){
        for (let i = top; i <= right; i++) mat[top][i] = val++
        top++;
        
        for (let i = top; i <= bottom; i++) mat[i][right] = val++
        right--
        
                
        for (let i = right; i >= left; i--) mat[bottom][i] = val++
        bottom--
        
        for (let i = bottom; i >= top; i--) mat[i][left] = val++
        left++
    }
    return mat
    
};