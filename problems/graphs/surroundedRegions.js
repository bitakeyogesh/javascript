/**
 * https://leetcode.com/problems/surrounded-regions/
 * 
    Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
    A region is captured by flipping all 'O's into 'X's in that surrounded region.

    Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
    Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
    Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. 
                 Two cells are connected if they are adjacent cells connected horizontally or vertically.
 */


let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let rows = board.length, columns = board[0].length;
    for (let i = 0; i < rows; i++) {
        markBoard(board, rows, columns, i, 0); //left border
        markBoard(board, rows, columns, i, columns - 1); //right border
    }
    for (let i = 0; i < columns; i++) {
        markBoard(board, rows, columns, 0, i); //top border
        markBoard(board, rows, columns, rows - 1, i); //left border
    }

    flipBoard(board, rows, columns);
};

function markBoard(board, rows, columns, i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= columns || board[i][j] !== 'O') {
        return;
    }
    board[i][j] = 'M';
    directions.forEach(([dx, dy]) => {
        let x = i + dx, y = j + dy;
        markBoard(board, rows, columns, x, y);
    })
}
function flipBoard(board, rows, columns) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (board[i][j] == 'M') {
                board[i][j] = 'O';
            }
            else if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }
}

let matrix = [
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"]
];
solve(matrix);
console.log(matrix);

//output
// [
//     [ 'X', 'O', 'X', 'O', 'X', 'O' ],
//     [ 'O', 'X', 'X', 'X', 'X', 'X' ],
//     [ 'X', 'X', 'X', 'X', 'X', 'O' ],
//     [ 'O', 'X', 'O', 'X', 'O', 'X' ]
//   ]