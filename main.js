$(document).ready(function(){

//declare variables
var gameBoard = [];
var board = document.getElementById("game-table");
var currentRow;
var currentPlayer = 1;
$('#game-table').
// newGame();

// function to create game board
// 7 columns and 6 rows
function buildGameBoard() {
    gameBoard = [];
    for (var r = 0; r < 6; r++) {
        gameBoard[r] = [];
        for (var c = 0; c < 7; c++) {
            gameBoard[r].push(0)
        }
    }
    console.log(gameBoard)
    console.log(gameBoard[x][4])

    //for loop bottom up
    for (var i=6; i >=0; i--;) {

    }
}

//place game piece on board
function gamePiece(player){
  this.player = player;
  this.color = player == 1 ? 'red' : 'yellow';
  this.id = id.toString();
  id++;

  this.addToScene = function(){
    board.innerHTML += '<div id="d'+this.id+'" class="disc '+this.color+'"></div>';
  }
}

function placeGamePiece(player) {
currentPlayer = player;
var gamePiece = new gamePiece(player);
gamePiece.addToBoard();
}


//define players

function Disc(player) {
    this.player = player;
    this.color = player == 1 ? 'red' : 'yellow';
    this.id = id.toString();
    id++;
}

//is the column occupied
function firstFreeRow(col, player) {
    for (var i = 0; i < 6; i++) {
        if (gameBoard[i][col] != 0) {
            break;
        }
    }
}

function cellVal(row, col) {
    if (gameField[row] == undefined || gameField[row][col] == undefined) {
        return -1;
    } else {
        return gameField[row][col];
    }
}
//place piece at the bottom of the column



//determine current player

//determine a win
function determineVictory() {

}

//run new game

function newGame() {
    buildGameBoard();
    // placeGamePiece();
}

$('.col').click(function(){
  console.log(this);
  console.log("CLICK");
  console.log(currentPlayer)
  //Check for present pieces
  $(this).addClass("circle");
  //Drop piece for that player

  //Check for win logic


  //if not a win then switch players
  if (currentPlayer ===1){
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
});

});
