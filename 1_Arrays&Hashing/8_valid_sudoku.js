const board = [["1", "2", ".", ".", "3", ".", ".", ".", "."],
               ["4", ".", ".", "5", ".", ".", ".", ".", "."],
               [".", "9", "8", ".", ".", ".", ".", ".", "3"],
               ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
               [".", ".", ".", "8", ".", "3", ".", ".", "5"],
               ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
               [".", ".", ".", ".", ".", ".", "2", ".", "."],
               [".", ".", ".", "4", "1", "9", ".", ".", "8"],
               [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

function validSudoku(board){
    let row = new Map()
    let col = new Map()
    let small_board = new Map()

    for(let r=0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            if (board[r][c] === '.') continue;

            const small_board_key = `${Math.floor(r/3)},${Math.floor(c/3)}`;

            if((row.get(r) && row.get(r).has(board[r][c])) || (col.get(c) && col.get(c).has(board[r][c])) || (small_board.get(small_board_key) && small_board.get(small_board_key).has(board[r][c]))){
                return false
            }

            if(!row.has(r)) row.set(r, new Set());
            if(!col.has(c)) col.set(c, new Set());
            if(!small_board.has(small_board_key)) small_board.set(small_board_key, new Set());

            row.get(r).add(board[r][c])
            col.get(c).add(board[r][c])
            small_board.get(small_board_key).add(board[r][c])
        }
    }
    console.log(row)
    console.log(col)
    console.log(small_board)
    return true
}

console.log(validSudoku(board))



