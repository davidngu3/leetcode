/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let rookPos = findRook(board);
    return findUp(board, ...rookPos) + 
            findDown(board, ...rookPos) +
            findLeft(board, ...rookPos) +
            findRight(board, ...rookPos);
};

function findRook(board) {
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if (board[i][j] == "R") {
                return [i, j];
            }
        }
    }
}

function findUp(board, rooki, rookj) {
    var spot = board[rooki][rookj];
    
    while (rooki > 0 && spot !== 'B' && spot !== 'p') {
        rooki--;
        spot = board[rooki][rookj];
        if (spot == 'p') {
            return 1;
        }
    }
    return 0;
} 

function findDown(board, rooki, rookj) {
    var spot = board[rooki][rookj];
    
    while (rooki < board.length-1 && spot !== 'B' && spot !== 'p') {
        rooki++;
        spot = board[rooki][rookj];
        if (spot == 'p') {
            return 1;
        }
    }
    return 0;
} 

function findLeft(board, rooki, rookj) {
    var spot = board[rooki][rookj];
    
    while (rookj > 0 && spot !== 'B' && spot !== 'p') {
        rookj--;
        spot = board[rooki][rookj];
        if (spot == 'p') {
            return 1;
        }
    }
    return 0;
} 

function findRight(board, rooki, rookj) {
    var spot = board[rooki][rookj];
    
    while (rookj < board[rooki].length-1 && spot !== 'B' && spot !== 'p') {
        rookj++;
        spot = board[rooki][rookj];
        if (spot == 'p') {
            return 1;
        }
    }
    return 0;
} 

