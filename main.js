//declare variables
var gameBoard = [];
var board = document.getElementById("game-table");
var currentRow

newGame();

// function to create game board
// 7 columns and 6 rows
function buildGameBoard() {
  gameBoard = [];
  for(var r = 0; r < 6; r++){
    gameBoard[r] = [];
    for (var c = 0; c < 7; c++) {
      gameBoard[r].push(0)
    }
  } console.log(gameBoard)
}

//place game piece on board
function placeGamePiece(player){

}

//define players

function Disc(player){
  this.player = player;
  this.color = player == 1 ? 'red' : 'yellow';
  this.id = id.toString();
  id++;

  this.addToScene = function(){
    board.innerHTML += '<div id="d'+this.id+'" class="disc '+this.color+'"></div>';
    //if(currentPlayer==2){

      // document.getElementById('d'+this.id).style.left = (14+60*currentCol)+"px";
      //dropDisc(this.id,currentPlayer);
  //   }
   }
}


//is the column occupied
function firstFreeRow(col,player){
  for(var i = 0; i<6; i++){
    if(gameBoard[i][col]!=0){
      break;
    }
  }
}

function cellVal(row,col){
  if(gameField[row] == undefined || gameField[row][col] == undefined){
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

function newGame(){
  buildGameBoard();
  // placeGamePiece();
}





