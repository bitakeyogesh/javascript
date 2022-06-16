/**
 * https://leetcode.com/problems/rotting-oranges/
 * 
    You are given an m x n grid where each cell can have one of three values:

    0 representing an empty cell,
    1 representing a fresh orange, or
    2 representing a rotten orange.
    Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

    Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

    Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
    Output: 4
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let freshOranges = 0, m = grid.length, n = grid[0].length;
    let queue = [], minutes = 0, directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                freshOranges++;
            }
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    //bfs
    while (queue.length && freshOranges > 0) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let [row, column] = queue.shift();
            directions.forEach(([xd, xy]) => {
                let x = row + xd, y = column + xy;
                if (x > -1 && y>-1 && x <m && y<n   && grid[x][y] == 1) {
                    queue.push([x,y]);
                    grid[x][y] = 2;
                    freshOranges--;
                }
            });
        }
        minutes++;
    }

    return freshOranges == 0 ? minutes : -1;
};

//let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
let grid = [[1,2]];
console.log(orangesRotting(grid));