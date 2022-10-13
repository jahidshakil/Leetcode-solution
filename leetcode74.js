/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 
*/


var searchMatrix = function(matrix, target) {
    let r = 0;
    let c = matrix[0].length-1;

    while(r < matrix.length && c >= 0) {

        if( matrix[r][c]==target)
            return true;

        else if(matrix[r][c] > target)
            c--;
        
        else 
            r++;
    }
    return false;      
};