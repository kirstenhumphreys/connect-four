var gameBoard = new Array();
var board = getElementByClass("game-board");
var currentRow

// function to create game board
// 7 columns and 6 rows
function buildGameBoard() {
  gameBoard = new Array();
  for(var r = 0; r < 6; r++){
    gameBoard[i] = new Array();
    for (var c = 0; c < 7; c++) {
      gameBoard[i].push(0);
    }
  }
},


//function to make pieces fall into colunm

//function to determine two players / current player

//funtion to determine a win

function determineVictory() {

}

//create game pieces and add to board

function placeGamePiece(player){

}

//run new game

function newgame(){
  buildGameBoard();
  placeGamePiece(Math.floor(Math.random()*2)+1);
},

newGame();

