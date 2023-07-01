var playerTurn = "X";
var gameOver = false;

function resetGame() {
  gameOver = false;
  document.querySelectorAll("#00, #01, #02, #10, #11, #12, #20, #21, #22").forEach(cell => {
    cell.textContent = "";
  });
  playerTurn = "X";
  document.querySelector("#message").textContent = "";
}

function checkWinner() {
  var winningCombinations = [
    ["00", "01", "02"], ["10", "11", "12"], ["20", "21", "22"],
    ["00", "10", "20"], ["01", "11", "21"], ["02", "12", "22"],
    ["00", "11", "22"], ["02", "11", "20"]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    var cell1 = document.querySelector("#" + winningCombinations[i][0]).textContent;
    var cell2 = document.querySelector("#" + winningCombinations[i][1]).textContent;
    var cell3 = document.querySelector("#" + winningCombinations[i][2]).textContent;

    if (cell1 != "" && cell1 == cell2 && cell2 == cell3) {
      document.querySelector("#message").textContent = playerTurn + " is the Winner!";
      gameOver = true;
      return;
    }
  }

  // Check Draw
  if (!gameOver) {
    var allCellsFilled = true;
    document.querySelectorAll("#00, #01, #02, #10, #11, #12, #20, #21, #22").forEach(cell => {
      if (cell.textContent == "") allCellsFilled = false;
    });
    if (allCellsFilled) {
      document.querySelector("#message").textContent = "It's a draw!";
      gameOver = true;
    }
  }
}

document.querySelectorAll("#00, #01, #02, #10, #11, #12, #20, #21, #22").forEach(cell => {
  cell.addEventListener("click", function() {
    if (gameOver) return;
    if (this.textContent == "") {
      this.textContent = playerTurn;
      checkWinner();
      playerTurn = playerTurn === 'X' ? 'O' : 'X';
    }
  });
});