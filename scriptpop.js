let windowWidth = window.innerWidth; // width where bubbles should be present
let windowHeight = window.innerHeight;
let totalBubble = 10;
let popped = 0;
let bubbleleft = 10;
// height where bubbles should be present
let body = document.body;
let gameTime = null;

let colors = [
  "rgb(240, 141, 168)",
  "rgb(230, 181, 34)",
  "rgb(96, 64, 237)",
  "rgb(161, 131, 242)",
];

window.onload = function () {
  const player2 = document.querySelector("#player2name");
  const play2 = player2.value;
  const score = document.querySelector(".score-board"); // hiding score board in main page
  score.style.visibility = "hidden";
};

const start = document.querySelector(".startbtn"); //adding eventlistenerto start button
start.addEventListener("click", startButtonEvent);

function startButtonEvent(evt) {
  gameTime = setTimeout(() => {
    timeout();
  }, 9000);

  const score = document.querySelector(".score-board");
  score.style.visibility = "visible";
  let mainpage = document.querySelector(".main-game");
  mainpage.style.visibility = "hidden"; //make landing page hide

  for (let i = 0; i < totalBubble; i++) {
    let newBubble = createBubble(i);
    newBubble.addEventListener("click", bubbleClickHandler);
  }
}

function createBubble(i) {
  let bubbleDiv = document.createElement("div");
  bubbleDiv.classList.add("bubbles");
  bubbleDiv.id = i.toString();
  let currentColorIndex = Math.floor(Math.random() * 4);
  bubbleDiv.style.backgroundColor = colors[currentColorIndex];
  bubbleDiv.style.opacity = "1";
  rand = Math.floor(Math.random() * (windowWidth - 100));
  bubbleDiv.style.left = rand + "px";
  bubbleDiv.style.right = rand + "px";
  document.body.appendChild(bubbleDiv);
  return bubbleDiv;
}
// remove bubble on clicking
function bubbleClickHandler(evt) {
  console.log(evt.target);
  const currentBubble = evt.target;
  currentBubble.remove();
  popped++;
  bubbleleft--;
  // update score on score board
  let scoreEle = document.querySelector(".score");
  scoreEle.textContent = popped;
  let bubbleleftele = document.querySelector(".left");
  bubbleleftele.textContent = bubbleleft;
}
//calling timeout function after 8sec
function timeout() {
  let remainingbubble = document.querySelectorAll(".bubbles");
  if (gameTime) {
    clearTimeout(gameTime);
    gameTime = null;
  }
  for (let i = remainingbubble.length - 1; i >= 0; i--) {
    remainingbubble[i].remove();
  }
  const timeover = document.createElement("div");
  timeover.classList.add("timeup");
  body.appendChild(timeover);
  let newh1 = document.createElement("h1");
  newh1.innerText = "Time Up!!!!!";
  timeover.appendChild(newh1);
}
