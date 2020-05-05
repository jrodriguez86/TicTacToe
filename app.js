let clickCount = 0;
    
    const playerMove = (event) => {
      $(event.currentTarget).text();
      let boardArray = [];
      
      
      clickCount++;
      // If clickcount is even then Player 2's on even clicks
      if (clickCount % 2 == 0) {
        console.log("player2 move");
        boardArray.push($(event.currentTarget).text("O"));
        ;
        // Player 1's turn on odd clicks
    } else {
      console.log("player1 move");
      boardArray.push($(event.currentTarget).text("X"));
        };
        console.log(boardArray)
        }
    

    // Winning combos array
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], 
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
      ];


    // If the player has clicked 9 times it's a draw
    const draw = () => {
      let clickCount = 0
      clickCount ++;
      if (clickCount === 9) {
        console.log("draw")
        alert("DRAW! Reset Board");
        setTimeout(reset, 3000);
      }
    }


    $(() => {

    // createBoard();  
  $(".square").one("click", playerMove);
  $(".square").one("click", draw);
  
  
    
  
  
  
  });