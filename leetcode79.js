
/*


Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/



var exist = function (board, word) {
    let rows = board.length;
    let cols = board[0].length;

    function hleperDfs(row, col, indx){
    if(word.length===indx) return true;
    if(row>=rows || row<0 || board[row][col] !==word[indx]) return false;
    board[row][col]= '#';
    if(hleperDfs(row+1,col,indx+1) || hleperDfs(row-1, col, indx+1) || hleperDfs(row, col+1, indx +1) ||   hleperDfs(row, col-1, indx+1)) return true;
    board[row][col] = word[indx];
    
}
    for(let i =0 ; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(board[i][j]==word[0] && hleperDfs(i, j, 0)) return true;
        }
    }
    return false

};

