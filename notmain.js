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
                gameBoard[r].push(0);
            }
        }
    }

    buildGameBoard();

    //function to place game piece on the board with corresponding player's piece
    function placeGamePiece(player, myThis, col) {
        var whichPlayer = 'circlep' + currentPlayer;
        // myThis.addClass(whichPlayer);
        var row = gravityCheck(col);
        if (row >= 0) {
          var cssSelector = '.row-' + row + '.col-' + col;
          console.log('cssSelector:', cssSelector);
          $(cssSelector).addClass(whichPlayer);  // update DOM
          gameBoard[row][col] = currentPlayer;     // update gameBoard
        }
        else {
          console.log('No row is available for that column');
        }
    }

    function gravityCheck(col) {
      console.log('gravityCheck:', col);
      console.log('gameBoard:', gameBoard);
      for (var row = 5; row >= 0; row--) {
          if (gameBoard[row][col] === 0) {
              return row;
          }
      }
      return -1;
    }

    //when a click happens in the .col class
    $('.col').click(function() {
        var col = parseInt(this.classList[1][4]);
        var row = parseInt(this.classList[2][4]);
        console.log(currentPlayer); //logs which player just clicked the board

        placeGamePiece(currentPlayer, $(this), col);
        // gravityCheck(gameBoard);

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
