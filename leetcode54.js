/* Given an m x n matrix, return all elements of the matrix in spiral order. 
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/



var spiralOrder = function (matrix) {
    if(matrix.length===0) return [];
    let res=[];
    let startRow = 0;
    let endRow = matrix.length-1;
    let startColumn = 0;
    let endColumn = matrix[0].length-1;
    
    
    while(startColumn<=endColumn && startRow<=endRow){
        for(let i =startColumn; i<=endColumn; i++){
            res.push(matrix[startRow][i]);
            
        }
        startRow++;
        
        for(let i =startRow; i<=endRow; i++){
            res.push(matrix[i][endColumn]);
        }
        endColumn--;
        
        if(startRow<=endRow){
           for(let i =endColumn; i>=startColumn; i--){
            res.push(matrix[endRow][i]);
             }
           }
        endRow--;
        
        
    if(startColumn<=endColumn){
        for(let i =endRow; i>=startRow; i--){
            res.push(matrix[i][startColumn]);
        }
    }
        
        startColumn++;
        
    }
    
    return res
    
};