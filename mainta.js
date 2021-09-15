// VARIABLES
const game = document.getElementById("game");
const players = document.getElementById("players");
const accept = document.getElementById("accept");
const victory = document.getElementById("victory");
const acceptInfo = document.getElementById("acceptInfo");
const resetBtn = document.getElementById("resetBtn");

let playerScoreA = 0;
let playerScoreB = 0;
let playerTurn = 0;
let count = 0;
let int = false;
let choice = 50;
let playerB = "sample";

const playerA = prompt("Player one name: ");
players.children[0].textContent = playerA;

while (choice !== "0" && choice !== "1") {
  choice = prompt("Add second player (write: 0 ) or play vs AI ? (write: 1 )");
}

if (choice === "0") {
  playerB = prompt("player two name: ");
  int = false;
} else if (choice == 1) {
  int = true;
  playerB = `${playerA} Slayer`;
}

players.children[0].textContent = playerA;

if (int === true) players.children[1].textContent = `${playerA} Slayer`;
else players.children[1].textContent = playerB;

// Victory message
accept.addEventListener("click", () => {
  victory.classList.remove("show");
});

// RESET BTN
resetBtn.addEventListener("click", () => {
  playerScoreA = "0";
  playerScoreB = "0";
  playersScore.children[0].textContent = `Score: ${playerScoreA}`;
  playersScore.children[1].textContent = `Score: ${playerScoreB}`;
});

// GAME
game.addEventListener("click", (event) => {
  if (event.target.id === "game" || event.target.className !== "") {
    return console.log("KLIKASTE MAL KPO");
  } else if (playerTurn == 0) {
    event.target.classList.add("red");
    playerTurn++;
    count++;
    players.children[1].classList.add("blue");
    players.children[0].classList.remove("redPlayer");
  } else if (playerTurn) {
    event.target.classList.add("blue");
    playerTurn--;
    count++;
    players.children[0].classList.add("redPlayer");
    players.children[1].classList.remove("blue");
  }

  // AI logic

  while (playerTurn && int && count < 9) {
    let x = Math.floor(Math.random() * 9);
    if (game.children[x].className === "") {
      game.children[x].classList.add("blue");
      playerTurn--;
      count++;
      players.children[1].classList.remove("blue");
      players.children[0].classList.add("redPlayer");
    }
  }
  // VICTORY CONDITIONS

  if (
    // HORIZONTAL
    (game.children[0].className === "red" &&
      game.children[1].className === "red" &&
      game.children[2].className === "red") ||
    (game.children[3].className === "red" &&
      game.children[4].className === "red" &&
      game.children[5].className === "red") ||
    (game.children[6].className === "red" &&
      game.children[7].className === "red" &&
      game.children[8].className === "red") ||
    // VERTICAL
    (game.children[0].className === "red" &&
      game.children[3].className === "red" &&
      game.children[6].className === "red") ||
    (game.children[1].className === "red" &&
      game.children[4].className === "red" &&
      game.children[7].className === "red") ||
    (game.children[2].className === "red" &&
      game.children[5].className === "red" &&
      game.children[8].className === "red") ||
    // DIAGONALES
    (game.children[0].className === "red" &&
      game.children[4].className === "red" &&
      game.children[8].className === "red") ||
    (game.children[2].className === "red" &&
      game.children[4].className === "red" &&
      game.children[6].className === "red")
  ) {
    timerReset(30);
    count = 0;
    playerScoreA++;
    playersScore.children[0].textContent = `Score: ${playerScoreA}`;
    victory.classList.add("show");
    acceptInfo.textContent = `${playerA} Win !`;
  } else if (
    // HORIZONTAL
    (game.children[0].className === "blue" &&
      game.children[1].className === "blue" &&
      game.children[2].className === "blue") ||
    (game.children[3].className === "blue" &&
      game.children[4].className === "blue" &&
      game.children[5].className === "blue") ||
    (game.children[6].className === "blue" &&
      game.children[7].className === "blue" &&
      game.children[8].className === "blue") ||
    // VERTICAL
    (game.children[0].className === "blue" &&
      game.children[3].className === "blue" &&
      game.children[6].className === "blue") ||
    (game.children[1].className === "blue" &&
      game.children[4].className === "blue" &&
      game.children[7].className === "blue") ||
    (game.children[2].className === "blue" &&
      game.children[5].className === "blue" &&
      game.children[8].className === "blue") ||
    // DIAGONALES
    (game.children[0].className === "blue" &&
      game.children[4].className === "blue" &&
      game.children[8].className === "blue") ||
    (game.children[2].className === "blue" &&
      game.children[4].className === "blue" &&
      game.children[6].className === "blue")
  ) {
    timerReset(60);
    count = 0;
    playerScoreB++;
    playersScore.children[1].textContent = `Score: ${playerScoreB}`;
    victory.classList.add("show");
    acceptInfo.textContent = `${playerB} Win !`;
  } else {
    if (count === 9) {
      timerReset(10);
      victory.classList.add("show");
      count = 0;
      acceptInfo.textContent = `EMPATE`;
    }
  }
});

// FUNCIONES

const timerReset = (miliSeconds) => {
  setTimeout(reset, miliSeconds);
};

const reset = () => {
  for (j = 0; j < 9; j++) {
    game.children[j].className = "";
    playerTurn = 0;
    players.children[0].classList.add("redPlayer");
    players.children[1].classList.remove("blue");
  }
  j = 0;
};
