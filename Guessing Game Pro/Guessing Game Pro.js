//initializing

let attemptsTotal = 4;
let attempts = 0;
let wonTotal = 0;
let lostTotal = 0;

// finding

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessNo = document.querySelector("#guessNo");
const check = document.querySelector("#check");
const resText = cardBody.querySelector(".res-text");
const wonLostMsg = document.createElement("p");
const remaining = cardBody.querySelector(".remaining");

form.addEventListener("submit", function (e) {
  event.preventDefault();
  //   console.log("Submitted");
  //   console.log(guessNo.value);

  attempts++;
  if (attempts == 5) {
    guessNo.disabled = true;
    check.disabled = true;
  }
  if (attempts < 6) {
    checkRes(guessNo.value);
    remaining.innerHTML = `Remaining Attempts : ${attemptsTotal - attempts}`;
  }
  guessNo.value = "";
});

function checkRes(guessNo) {
  //   console.log(guessNo);
  const randomNo = getRandomNo(4);
  //   console.log(randomNo);
  if (guessNo == randomNo) {
    resText.innerHTML = `You have won!`;
    wonTotal++;
  } else {
    resText.innerHTML = `You have lost. Random No was : ${randomNo}`;
    lostTotal++;
  }
  wonLostMsg.innerHTML = `Won : ${wonTotal}, Lost : ${lostTotal}`;
  wonLostMsg.classList.add("large");
  cardBody.appendChild(wonLostMsg);
}

function getRandomNo(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
