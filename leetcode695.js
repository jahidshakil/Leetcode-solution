/*

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.
*/


const maxAreaOfIsland = (grid) => {    
    let maxArea = 0;
    let currArea= 0;
   for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			currArea = 0
			if (grid[row][col] === 1) {
				neighborCheck(row, col)
			}
			maxArea = Math.max(maxArea, currArea)
		}
	}
    function neighborCheck(row, col) {
		if (grid?.[row]?.[col] === 1) {
			currArea++
			grid[row][col] = 2
			neighborCheck(row + 1, col)
			neighborCheck(row - 1, col)
			neighborCheck(row, col + 1)
			neighborCheck(row, col - 1)
		}
	}
    return maxArea;
}

