/*
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 
*/

var islandPerimeter = function(grid) {
    
    if(grid.length===0 || grid[0].length===0) return 0;
    let result = 0;
    
    for(let i =0; i<grid.length; i++){ 
    for(let j=0; j<grid[i].length; j++){
        
        if( grid[i][j] ===1){
            result+=4;
            
        if(i>0 && grid[i-1][j]==1){
            result-=2;
        }
            
        if(j>0 && grid[i][j-1] == 1){
            result-=2;
        }
        } 
    }
        
    }
    return result;
};