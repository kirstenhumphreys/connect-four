//function to load the page with everything inside
$(document).ready(function() {

var gameBoard = []; //creating the array for the game board
var currentPlayer = 1; //variable to define the first player
var board = document.getElementById("game-board");



//function to creating the 2D array with rows and colummns

function buildGameBoard() {
         gameBoard = [];
         for (var r = 0; r < 6; r++) {
            gameBoard[r] = [];
         for (var c = 0; c < 7; c++) {
            gameBoard[r].push(0)
            }
        }
        function gravityCheck(row){
          for (var i= gameBoard.length; i <=0; i--) {
            if (gameBoard[i][row] !== "1" && gameBoard[i][row] !== "2") {
              gameBoard[i][row] = currentPlayer;
              placeGamePiece();
              return currentPlayer;
            }
          }
        }
          console.log(gameBoard);
          console.log(gameBoard[0][4]);
}

//function to place game piece on the board with corresponding player's piece
function placeGamePiece(player, myThis) {
  var whichPlayer = 'circlep' + currentPlayer;
  myThis.addClass(whichPlayer);
}

//when a click happens in the .col class
$('.col').click(function() {
        console.log(this.classList[1]); //logs the div's second class (col-#)
        console.log(this.classList[2]); //logs the div's third class (row-#)
        console.log(currentPlayer); //logs which player just clicked the board

        placeGamePiece(currentPlayer, $(this));

        //if the current player doesn't win, switch to the next player
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        };
})

//reset empty gameboard
// $('.newGame').click(function()
//          reset: function(){
//          $('')//remove pieces from the board


//          })

})

