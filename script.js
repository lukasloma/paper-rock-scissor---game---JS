const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: 0,
  aiHand: 0,
};
function checkResult(player, ai) {
  if (
    (player === "paper" && ai === "rock") ||
    (player === "scissor" && ai === "paper") ||
    (player === "rock" && ai === "scissor")
  ) {
    return "you win";
  } else if (player === ai) {
    return "draw";
  } else return "you loss";
}
const aiChoice = function () {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
};
function plcResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

  if (result === "you win") {
    document.querySelector("p.wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent =
      "You win !!";
    document.querySelector('[data-summary="who-win"]').style.color = "blue";
  } else if (result === "you loss") {
    document.querySelector("p.losses span").textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      "You loss !!";
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  } else if (result === "draw") {
    document.querySelector("p.draws span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "Draw !!";
    document.querySelector('[data-summary="who-win"]').style.color = "orange";
  }
}
const letsPlay = function () {
  if (!game.playerHand) {
    return alert("Click on the picture");
  }
  game.aiHand = aiChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  plcResult(game.playerHand, game.aiHand, gameResult);
};
const choice = function () {
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 2px yellow";
  game;
};
const hands = [...document.querySelectorAll(".select img")];
hands.forEach((hand) => hand.addEventListener("click", choice));

document.querySelector(".start").addEventListener("click", letsPlay);
