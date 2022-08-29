/*
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 
*/
var minimumTotal = function(triangle) {
	for (let row = triangle.length - 2; row >= 0; row--) {
		for (let col = 0; col <= row; col++) {
			const min = Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);

			triangle[row][col] += min;
		}
	}

	return triangle[0];
};