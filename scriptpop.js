let windowWidth = window.innerWidth; // width where bubbles should be present
let windowHeight = window.innerHeight;
const totalBubble = 15;
let popped = 0;
let bubbleleft = 15;
let gamer1 = { id: 1, name: "Player 1", score: 0 };
let gamer2 = { id: 2, name: "Player 2", score: 0 };
let currentGamer;

// height where bubbles should be present
let body = document.body;
let gameTime = null;

let colors = [
  "rgb(230, 204, 34)",
  "rgb(240, 141, 168)",
  "rgb(96, 64, 237)",
  "rgb(161, 131, 242)",
];

window.onload = function () {
  const score = document.querySelector(".score-board"); // hiding score board in main page
  score.style.visibility = "hidden";

  const start = document.querySelector(".startbtn"); //adding eventlistenerto start button
  start.addEventListener("click", flashMessageEvent);

  function flashMessageEvent(evt) {
    const flashMessage = document.createElement("div");
    const message = document.createElement("h1");
    const player1Val = document.querySelector("#player1name").value;
    const player2Val = document.querySelector("#player2name").value;
    //assigning players names
    if (player1Val) {
      gamer1.name = player1Val;
    }
    if (player2Val) {
      gamer2.name = player2Val;
    } //showing flash message to player1 on clicking start button
    message.innerText = `${gamer1.name} starts now`;
    flashMessage.appendChild(message);
    flashMessage.classList.add("flashMessage");
    document.body.appendChild(flashMessage);
    let mainpage = document.querySelector(".main-game");
    mainpage.style.visibility = "hidden";
    setTimeout(() => {
      //setting timeout for flash message
      flashMessage.remove();
      startGame(gamer1);
    }, 2000);
  }

  function startGame(gamer) {
    //game start function
    currentGamer = gamer;
    gameTime = setTimeout(() => {
      timeout();
    }, 15000); // setting timeout as 15sec for each player
    const score = document.querySelector(".score-board");
    score.style.visibility = "visible"; //making score board visible
    for (let i = 0; i < totalBubble; i++) {
      let newBubble = createBubble(i); //calling creating bubble function
      newBubble.addEventListener("click", bubbleClickHandler);
    }
  }
  function createBubble(i) {
    let bubbleDiv = document.createElement("div");
    bubbleDiv.classList.add("bubbles");
    let currentColorIndex = Math.floor(Math.random() * 4);
    bubbleDiv.style.bottom = Math.random() * -window.outerHeight + "px";
    bubbleDiv.style.backgroundColor = colors[currentColorIndex];
    bubbleDiv.style.opacity = "1";
    bubbleDiv.innerText = Math.floor(Math.random() * 15);

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
    bubbleleft--; // reducing count and updating score board
    let currentScore = currentBubble.innerText;
    // console.log(currentScore);
    let tonumber = parseInt(currentScore);
    popped = popped + tonumber;
    updateScore(popped, bubbleleft);
    currentGamer.score = popped;
  }
  //calling timeout function after 15sec
  function timeout() {
    let remainingbubble = document.querySelectorAll(".bubbles");
    if (gameTime) {
      clearTimeout(gameTime);
      gameTime = null;
    }
    for (let i = remainingbubble.length - 1; i >= 0; i--) {
      remainingbubble[i].remove(); // deleting remaining bubbles after is timeup
    }
    const timeupEl = document.querySelector(".timeup"); // creating timpup alert
    if (timeupEl) {
      timeupEl.style.visibility = "visible";
    } else {
      const timeover = document.createElement("div");
      timeover.classList.add("timeup");
      body.appendChild(timeover);
      let newh1 = document.createElement("h1");
      newh1.innerText = "Time Up!!!!!";
      timeover.appendChild(newh1);
    }
    //start second gamer by Player 2 start button
    if (currentGamer.id == 1) {
      //if player one this block executes else go to find who is winner
      const player2start = document.createElement("button");
      player2start.classList.add("player2start");
      body.appendChild(player2start);
      let newh2 = document.createElement("h1");
      newh2.innerText = `${gamer2.name} start`;
      player2start.appendChild(newh2);
      let getplayer2start = document.querySelector(".player2start");
      getplayer2start.addEventListener("click", secondGamerEventHandler); // secong player game starts on clicking button
      //getplayer2start.addEventListener("click", secondGamerEventHandler.bind(this, gamer1));
    } else {
      //winner who?
      setTimeout(() => {
        winner();
      }, 3000);
    }
  }
  //second player game
  function secondGamerEventHandler(evt) {
    const timeupEl = document.querySelector(".timeup"); // hiding score board in main page
    timeupEl.style.visibility = "hidden";
    let getp2btn = document.querySelector(".player2start");
    getp2btn.style.visibility = "hidden";
    popped = 0;
    bubbleleft = totalBubble;
    updateScore(popped, bubbleleft);
    startGame(gamer2);
  }
  //winner deciding function
  function winner() {
    let score1 = gamer1.score;
    let score2 = gamer2.score;
    const scoreboard = document.querySelector(".score-board"); // hiding score board in main page
    scoreboard.style.visibility = "hidden";

    const timeupEl = document.querySelector(".timeup"); // hiding score board in main page
    timeupEl.style.visibility = "hidden";

    const winner = document.createElement("div");
    winner.classList.add("winnercls");
    body.appendChild(winner);
    let h1txt = document.createElement("h1");
    if (score1 > score2) {
      h1txt.innerText = `${gamer1.name} Wins !`;
      winner.appendChild(h1txt);
    } else {
      h1txt.innerText = `${gamer2.name} Wins !`;
      winner.appendChild(h1txt);
    }
    if (score1 == score2) {
      h1txt.innerText = `Game is Tie`;
      winner.appendChild(h1txt);
    }
  }
  //reset score for each player
  function updateScore(score, remainingBubbles) {
    let scoreEle = document.querySelector(".score");
    scoreEle.textContent = score;

    let bubbleleftele = document.querySelector(".left");
    bubbleleftele.textContent = remainingBubbles;
  }
};
