/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 
*/

var numIslands = (grid)=>{
    
    var  helperCount=(i,j)=>{
        if(i<0 || j<0 || i >= grid.length || j>=grid[0].length || grid[i][j] !=='1' ) return;
        grid[i][j]='0';
        helperCount( i+1, j);
        helperCount( i-1, j);
        helperCount( i, j+1);
        helperCount( i, j-1);
    }
    
    let islandCount =0; 
    let rows=grid.length;
    let columns = grid[0].length;
    for(let i=0; i<rows; i++){
        for(let j=0; j<columns; j++){
            if(grid[i][j]==1){
                islandCount++;
                helperCount(i,j);
            }
        }
    }
    return islandCount;
}

 