grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

//Player's move. True --> move of Player1, False -- > move of player2
var move = true;

//Indicate whether a game is over or not
var gameover = false;

function mark(r, c) {
    var pos = "r"+r+c;

    //Close the About box if it is opened
    showAbout(false);

    if(grid[r][c] == 0) {
        switch(move) {
            case true:
            grid[r][c] = 1;
            document.getElementById(pos).style.backgroundColor = "red";
            break;

            case false:
            default:
            grid[r][c] = 2;
            document.getElementById(pos).style.backgroundColor = "blue";
            break;
        }
        move = !move;
        document.getElementById("disablemove").style.display = "none";

        switch(checkWinner()) {
            case 0:
            //No winners "YET"
            break;

            case 1:
            if(!gameover) {
                document.getElementById("result").style.color = "red";
                document.getElementById("result").innerHTML = "Player red has won";
                gameover = true;
            }
            break;

            case 2:
            if(!gameover) {
                document.getElementById("result").style.color = "blue";
                document.getElementById("result").innerHTML = "Player blue has won";
                gameover = true;
            }
            break;

            default:
            //ALL CELLS are FIlled
            document.getElementById("result").innerHTML = "Match drawn!!";
            gameover = true;
        }
    }
}

function checkWinner() {

        var row1, row2, row3;
        row1 = row2 = row3 = 1;

        var col1, col2, col3;
        col1 = col2 = col3 = 1;

        var diag1, diag2;
        diag1 = diag2 = 1;

        //row1-3 denotes horizontal rows.
        //If player 1 formed 3 cells in a horizontal row, the multiplication of those cells yields 1
        // Similarly for player2 it 8 (2 * 2 * 2 = 8)

        for(var i=0; i<3; i++) {
            row1 = row1 * grid[0][i];
            row2 = row2 * grid[1][i];
            row3 = row3 * grid[2][i];

            col1 = col1 * grid[i][0];
            col2 = col2 * grid[i][1];
            col3 = col3 * grid[i][2];

            diag1 = diag1 * grid[i][i];
        }

        diag2 = diag2 * grid[0][2] * grid[1][1] * grid[2][0];
        
        //Get sum of all cells in the grid to verify whether a tie has occured
        var sumofAllcells = 0;
        for(var i=0; i<3; i++) {
            for(var j=0; j<3; j++) {
                sumofAllcells += grid[i][j];
            }
        }

        if(row1 == 1 || row2 == 1 || row3 == 1 || col1 == 1 || col2 == 1 || col3 == 1) {
            return 1;
        }

        else if(row1 == 8 || row2 == 8 || row3 == 8|| col1 == 8 || col2 == 8 || col3 == 8) {
            return 2;
        }
        
        else if(diag1 == 1 || diag2 == 1) {
            return 1;
        }

        else if(diag1 == 8 || diag2 == 8) {
            return 2;
        }

        else if(sumofAllcells > 12) {
            return 99;
        }

        else return 0;
    
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function setplayerone(playerscolor) {
      switch(playerscolor) {
          case 'red':
          default:
          move = true;
          break;

          case 'blue':
          move = false;
          break;
      }
      closeNav();
  }

  function showAbout(choice) {
      closeNav();
      switch(choice) {
          case true:
          document.getElementById("about").style.display = "block";
          break;

          case false:
          document.getElementById("about").style.display = "none";
          break;
      }
      
  }