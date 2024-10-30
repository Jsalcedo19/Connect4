/* 
User stories for **Connect4Game:**

- **As a user,** I want to be able to place my piece in a column so that I can make my move.
- **As a user,** I want the game to automatically switch turns after each move so that I can play against an opponent.
- **As a user,** I want the game to detect when four pieces are connected (horizontally, vertically, or diagonally) so that a winner can be determined.
- **As a user,** I want to see a visual representation of the game board so that I can easily understand the current state of the game.
- **As a user,** I want to be notified when the game is over (win, lose, or draw) so that I know when to start a new game.
- As a user, I want to be able to reset a game once its done.

Psuedocodes:     

- Creating a 2D array to represent the game board

- Implementing functions to handle player moves and turn switching

- Developing a function to check for winning conditions

- Using DOM manipulation to update the visual representation of the game board

- Adding event listeners to handle user interactions

MVP:

- Basic 6x7 game board implementation
- Two-player turn-based gameplay
- Simple UI for placing pieces in columns
- Win detection for horizontal, vertical, and diagonal connections
- Game over state (win/draw) display
- Option to start a new game after completion

*/

/*-------------------------------- Constants --------------------------------*/


// defining the gameboard 6x7
let gameboard = [
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""],
["", "", "", "", "", "", ""]
];
let playerRed = "Red";
let playerBlack = "Black";
let turn = "Black";
let winner = false;
let tie = false;

/*---------------------------- Variables (state) ----------------------------*/

//ternary operator for switching player's turn
//turn = turn === "plyB" ? "plyR" : "plyB";

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector("#message");
console.log("Message Element:", messageEl);




/*-------------------------------- functions --------------------------------*/
//function that checks through the Board for the winner.
function checkWin (board, player) {
    const rows = board.length;
    const columns = board[0].length;

}

function init() {
    gameboard = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
        ];
    turn = "Black";
    winner = false;
    tie = false;
    console.log("Game initialized");
}

function renderBoard(){



}

function playerMove(){



}

/*-------------------------------- eventListeners --------------------------------*/














