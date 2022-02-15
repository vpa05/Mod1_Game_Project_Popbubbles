let windowWidth = window.innerWidth; // width where bubbles should be present
let windowHeight = window.innerHeight; // height where bubbles should be present
window.onload = function () {
  let body = document.body;
};

// startbtn.addEventListener("click", function () {
let colors = [
  "rgb(240, 141, 168)",
  "rgb(230, 181, 34)",
  "rgb(96, 64, 237)",
  "rgb(161, 131, 242)",
];

function createBubbles() {
  let bubbleDiv = document.createElement("div");
  bubbleDiv.classList.add("bubbles");
  let currentColorIndex = Math.floor(Math.random() * 4);
  bubbleDiv.style.backgroundColor = colors[currentColorIndex];
  bubbleDiv.style.opacity = "1";

  rand = Math.floor(Math.random() * (windowWidth - 100));
  bubbleDiv.style.left = rand + "px";
  document.body.appendChild(bubbleDiv);
}
for (let i = 0; i < 10; i++) {
  let newBubbles = createBubbles();
}

// animateBubble(bubbleDiv){

// }

// }

// let colors = [
//   "rgb(240, 141, 168)",
//   "rgb(230, 181, 34)",
//   "rgb(96, 64, 237)",
//   "rgb(161, 131, 242)",
// ];

// function createBubbles() {
//   let bubbleDiv = document.createElement("div");
//   bubbleDiv.classList.add("bubbles");
//   let currentColorIndex = Math.floor(Math.random() * 4);
//   bubbleDiv.style.backgroundColor = colors[currentColorIndex];
//   bubbleDiv.style.opacity = "1";

//   rand = Math.floor(Math.random() * (windowWidth - 100));
//   bubbleDiv.style.left = rand + "px";
//   document.body.appendChild(bubbleDiv);
// }
// for (let i = 0; i < 10; i++) {
//   let newBubbles = createBubbles();
// }

// // animateBubble(bubbleDiv){

// // }
