$(document).ready(function() {

    //declare variables
    var gameBoard = [];
    var board = document.getElementById("game-table");
    var currentRow;
    var currentPlayer = 1;
    $('#game-table');


    // creates board
    function buildGameBoard() {
        gameBoard = [];
        for (var r = 0; r < 6; r++) {
            gameBoard[r] = [];
            for (var c = 0; c < 7; c++) {
                gameBoard[r].push(0)
            }
        }

      function gravityCheck(column) {
      for (var i = gameBoard.length; i <= 0; i--) {
        if (gameBoard[i][column] !== "1" && gameBoard[i][column] !== "2"){
          gameBoard[i][column] = currentPlayer;
          function placeGamePiece(player, myThis) {
          var whichPlayer = 'circlep' + currentPlayer;
          return currentPlayer;
        }
      }
    }
    }
  }

    //defines the current player and puts their move on the board, called below
    function placeGamePiece(player, myThis) {
        var whichPlayer = 'circlep' + currentPlayer;
        myThis.addClass(whichPlayer);

    }

    function gravityCheck(column) {
      for (var i = gameBoard.length; i <= 0; i--) {
        if (gameBoard[i][column] !== "1" && gameBoard[i][column] !== "2"){
          gameBoard[i][column] = currentPlayer;
          function placeGamePiece(player) {
          var whichPlayer = 'circlep' + currentPlayer;
          return currentPlayer;
        }
      }
    }

    //determine a win
    function determineVictory() {
    }


//reset empty gameboard
$('.newGame').click(function()
         reset: function(){
         $('')

         })

    //when a column is clicked, places players piece on the board
    $('.col').click(function() {
        // console.log(this.classList[1]);
        // console.log(this.classList[2]);
        console.log(currentPlayer);
        console.log(gameBoard);




        //check for present pieces



        //call the function to place game pieces on board
       placeGamePiece(currentPlayer);


        var column;

        for (var r = 6; r <= 0; c--) {

          if ($(this).classList[3] === "empty") {
            //update data html classes add class or remove
            $(this).removeClass("empty");
            break;
            }
          }

        //if not a win then switch players
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }

      })//end of click


         function dropGamePiece(){
          for (var r=6; r >=0; r--) {
              if (columnPlacement === 0){
                 console.log(columnPlacement);
                 console.log(rowPlacement);
              }

        look into for each loop
          if (
          }

         }


        // if in row, column 6 value == 0, place circle


        //Check for win logic

        //function to check for match


columnMatch= for div row match could equal: [row[i],col[i]]


              row 1:            [0,0],[1,0],[2,0],[3,0]
                                [1,0],[2,0],[3,0],[4,0]
                                [2,0],[3,0],[4,0],[5,0]
              row 2:            [0,1],[1,1],[2,1],[3,1]
                                [1,1],[2,1],[3,1],[4,1]
                                [2,1],[3,1],[4,1],[5,1]
              row 3:            [0,2],[1,2],[2,2],[3,2]
                                [1,2],[2,2],[3,2],[4,2]
                                [2,2],[3,2],[4,2],[5,2]
              row 4:            [0,3],[1,3],[2,3],[3,3]
                                [1,3],[2,3],[3,3],[4,3]
                                [2,3],[3,3],[4,3],[5,3]
              row 5:            [0,4],[1,4],[2,4],[3,4]
                                [1,4],[2,4],[3,4],[4,4]
                                [2,4],[3,4],[4,4],[5,4]
              row 6:            [0,5],[1,5],[2,5],[3,5]
                                [1,5],[2,5],[3,5],[4,5]
                                [2,5],[3,5],[4,5],[5,5]
              row 7:            [0,6],[1,6],[2,6],[3,6]
                                [1,6],[2,6],[3,6],[4,6]
                                [2,6],[3,6],[4,6],[5,6]


rowMatch= for div col match could equal: [col[i],row[i]]

              col 6:            [5,0],[5,1],[5,2],[5,3]
                                [5,1],[5,2],[5,3],[5,4]
                                [5,2],[5,3],[5,4],[5,5]
                                [5,3],[5,4],[5,5],[5,6]
              col 5:            [4,0],[4,1],[4,2],[4,3]
                                [4,1],[4,2],[4,3],[4,4]
                                [4,2],[4,3],[4,4],[4,5]
                                [4,3],[4,4],[4,5],[4,6]
              col 4:            [3,0],[3,1],[3,2],[3,3]
                                [3,1],[3,2],[3,3],[3,4]
                                [3,2],[3,3],[3,4],[3,5]
                                [3,3],[3,4],[3,5],[3,6]
              col 3:            [2,0],[2,1],[2,2],[2,3]
                                [2,1],[2,2],[2,3],[2,4]
                                [2,2],[2,3],[2,4],[2,5]
                                [2,3],[2,4],[2,5],[2,6]
              col 2:            [1,0],[1,1],[1,2],[1,3]
                                [1,1],[1,2],[1,3],[1,4]
                                [1,2],[1,3],[1,4],[1,5]
                                [1,3],[1,4],[1,5],[1,6]
              col 1:            [0,0],[0,1],[0,2],[0,3]
                                [0,1],[0,2],[0,3],[0,4]
                                [0,2],[0,3],[0,4],[0,5]
                                [0,3],[0,4],[0,5],[0,6]


diagonalMatch=

              ascendingMatch:   [3,0],[2,1],[1,2],[0,3]
                                [4,0],[3,1],[2,2],[1,3]
                                [3,1],[2,2],[1,3],[0,4]
                                [5,0],[4,1],[3,2],[2,3]
                                [4,1],[3,2],[2,3],[1,4]
                                [3,2],[2,3],[1,4],[0,5]
                                [5,1],[4,2],[3,3],[2,4]
                                [4,2],[3,3],[2,4],[1,5]
                                [3,3],[2,4],[1,5],[0,6]
                                [5,2],[4,3],[3,4],[2,5]
                                [4,3],[3,4],[2,5],[1,6]
                                [5,3],[4,4],[3,5],[2,6]
             descendingMatch:   [2,0],[3,1],[4,2],[5,3]
                                [1,0],[2,1],[3,2],[4,3]
                                [2,1],[3,2],[4,3],[5,4]
                                [0,0],[1,1],[2,2],[3,3]
                                [1,1],[2,2],[3,3],[4,4]
                                [2,2],[3,3],[4,4],[5,6]
                                [0,1],[1,2],[2,3],[3,4]
                                [1,2],[2,3],[3,4],[4,5]
                                [2,3],[3,4],[4,5],[5,7]
                                [0,2],[1,3],[2,4],[3,5]
                                [1,3],[2,4],[3,5],[4,6]
                                [0,3],[1,4],[2,5],[3,6]






    }
//})

