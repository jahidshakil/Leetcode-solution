/*
You are given an m x n integer array grid where grid[i][j] could be:

1 representing the starting square. There is exactly one starting square.
2 representing the ending square. There is exactly one ending square.
0 representing empty squares we can walk over.
-1 representing obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.
*/
var uniquePathsIII = function(grid) {
    row = 0, col = 0, count = 0;
    const helper = (grid, count, row, col) =>{
        if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] == -1) return 0;
        if(grid[row][col] === 2) return count == -1 ? 1: 0;
        grid[row][col] = -1;
        count--;
        let res =  helper(grid, count, row + 1, col) +  helper(grid, count, row - 1, col) 
        + helper(grid, count, row, col + 1) + helper(grid, count, row, col - 1);
        grid[row][col] = 0;
        count++;
        return res;
    }
    for(let i = 0; i < grid.length; ++i){
        for(let j = 0; j < grid[0].length; ++j){
            if(grid[i][j] === 1){
                row = i;
                col = j;
            }
            if(grid[i][j] === 0) count++;
        }
    }
    return helper(grid, count, row, col);
};








