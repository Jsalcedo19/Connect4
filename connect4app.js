/* User stories for **Connect4Game:**

- **As a user,** I want to be able to place my piece in a column so that I can make my move.
- **As a user,** I want the game to automatically switch turns after each move so that I can play against an opponent.
- **As a user,** I want the game to detect when four pieces are connected (horizontally, vertically, or diagonally) so that a winner can be determined.
- **As a user,** I want to see a visual representation of the game board so that I can easily understand the current state of the game.
- **As a user,** I want to be notified when the game is over (win, lose, or draw) so that I know when to start a new game.
- As a user, I want to be able to reset a game once its done.

Psuedocodes:     

- Creating a 2D array to represent the game board

- Implementing functions to handle player moves and player switching

- Developing a function to check for winning conditions

- Using DOM manipulation to update the visual representation of the game board

- Adding event listeners to handle user interactions

MVP:

- Basic 6x7 game board implementation
- Two-player turn-based gameplay
- Simple UI for placing pieces in columns
- Win detection for horizontal, vertical, and diagonal connections
- Game over state (win/draw) display
- Option to reset to a new game after completion

*/

/*-------------------------------- Constants --------------------------------*/
//delcares the gameboard
let gameboard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];
let player2 = "Red";
let player1 = "Black";
let currentPlayer = "Black";
let winner = false;
let tie = false;
let gameActive = true;
//let player1Score = document.getElementById("Player1-Score");
//let player2Score = document.getElementById("Player2-Score");
//let tieScore = document.getElementById("tieScore");
//console.log(player1Score)
/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector("#message");
const resetBtn = document.getElementById("resetBtn");

/*-------------------------------- Functions --------------------------------*/

// Initializes the game
function init() {
  gameboard = Array(6)
    .fill("") // fills an array of 6 rows 
    .map(() => Array(7).fill("")); //fills an array of 7 columns
  currentPlayer = "Black";
  winner = false;
  tie = false;
  gameActive = true;
  messageEl.textContent = "Current Player: Black";
  renderBoard(); // Reset visual board
 // player1Score.textContent = 0;
 // player2Score.textContent = 0;
 // tieScore.textContent = 0;
}

// Renders the board on the DOM
//psuedo codes
/* 
    clears existing display 
    loops through rows and cells
    setting styles based on the cell state 
*/
function renderBoard() {
  //loops through each rows
  gameboard.forEach((row, rowIndex) => {
    //here the function uses another loop to loop through each cell of each column index.
    row.forEach((cell, colIndex) => {
      const cellId = rowIndex * 7 + colIndex + 1; //this cellId assumes that each row has exactly 7 cells.
      const cellElement = document.getElementById(cellId);
      cellElement.style.backgroundColor = cell === "Black" ? "black" : cell === "Red" ? "red" : "";
    });
  });
}

//checkFortie function checks every row and cell for a winner if no winner found then its a tie!
function checkForTie() {
  return gameboard.every((row) => row.every((cell) => cell !== ""));
}

// Checks if there’s a winning set
function checkBoard(row, column) {
  const player = gameboard[row][column];
  if (player === "") return false;
 /*helper function that checks every cell if there is a matching set. 
    used chat GPT for help on helper function "directionCheck" */
  function directionCheck(rowInc, colInc) {
    let count = 0;
    let r = row;
    let c = column;
    while (
      r >= 0 &&
      r < gameboard.length &&
      c >= 0 &&
      c < gameboard[0].length &&
      gameboard[r][c] === player
    ) {
      count++;
      r += rowInc;
      c += colInc;
    }
    return count;
  }
// declares variables that check for each match
  const horizontalCheck = directionCheck(0, 1) + directionCheck(0, -1) - 1;
  const verticalCheck = directionCheck(1, 0) + directionCheck(-1, 0) - 1;
  const diagDownRightCheck = directionCheck(1, 1) + directionCheck(-1, -1) - 1;
  const diagUpRightCheck = directionCheck(1, -1) + directionCheck(-1, 1) - 1;

  return (
    //checks for 4 set of the same color , horizontal, vertical, diagon
    horizontalCheck >= 4 ||
    verticalCheck >= 4 ||
    diagDownRightCheck >= 4 ||
    diagUpRightCheck >= 4
  );
}

// Switches to the other player
function switchPlayer() {
    currentPlayer = currentPlayer === "Black" ? "Red" : "Black";
    messageEl.textContent = `Current Player: ${currentPlayer}`;
  }

// Handles cell clicks
function clickCell(event) {
  if (!gameActive) return;

  const cellId = parseInt(event.target.id);
  const column = (cellId - 1) % 7;
  let row = null;

  for (let r = gameboard.length - 1; r >= 0; r--) {
    if (gameboard[r][column] === "") {
      row = r;
      break;
    }
  }
//if statement check for values on the gameboard then 
  if (row !== null) {
    gameboard[row][column] = currentPlayer;
    renderBoard(); //calls the render function to update the gameboard

    if (checkBoard(row, column)) {

      messageEl.textContent = `WOW!!!!!${currentPlayer} Wins!!!!!!`; 
      currentPlayer.textContent = currentPlayer.textContent + 1;
      //displays current player Win! message
      gameActive = false;
      
    } else if (checkForTie()) {
      messageEl.textContent = "It's a tie!"; // displays tie message on game message
      tieScore.textContent = tieScore.textContent + 1;
      gameActive = false;
    } else {
      switchPlayer(); //calls the switch player function which switches to the current player
    }
  } else {
    // Displays "Column is full" message 
    const messageEl = document.getElementById("message");
    messageEl.textContent = "Column is full. Try another column.";
  }
}
/* todo: Scretch goal create a scoreboard that would tally total number of wins 
    up to 20 matches.
    function gamScore(){
    if (winner === player 1);
    return text.content = player-1 +1;
    }
    if (winner === player 2);
    return text.content = player-2 +1;
    
    else winner !=== player 1 || player 2 
    return tie + 1 
*/
/*function gameScore(){
if (winner === "player1") {
  player1Score += 1; 
} else if (winner === "player2") {
  player2Score += 1;
} else if (winner === "tie") {
tieScore += 1;
}
document.getElementById("player1Score").textContent = player1Score;
document.getElementById("player2Score").textContent = player2Score;
document.getElementById("tieScore").textContent = tieScore;

 // End the game if either player reaches 10 wins
 if (player1Score >= 10 || player2Score >= 10) {
    messageEl.textContent = (`${winner} has reached 10 wins! Game Over!!!`);
  gameActive = false;
}
}
/*-------------------------------- Event Listeners --------------------------------*/
document.querySelectorAll(".grid").forEach((cell) => {
  cell.addEventListener("click", clickCell);
});
resetBtn.addEventListener("click", init);

init();

