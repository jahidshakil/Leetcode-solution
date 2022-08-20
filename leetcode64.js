/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/


var minPathSum = function(grid) {
    let row = grid.length;
    let column  = grid[0].length;
    
    for(let i =1; i<row; i++){
        grid[i][0]+=grid[i-1][0];
    }
    
    for(let j =1; j<column; j++){
        grid[0][j]+=grid[0][j-1];
    }
    
    
    for(let i=1; i<row; i++){
        for(let j=1; j<column; j++){
            grid[i][j]+=Math.min(grid[i-1][j], grid[i][j-1])
        }
    }
    return grid[row-1][column-1]
};

console.log(minPathSum([[1,4,5],[6,1,8], [9,0,1]]))