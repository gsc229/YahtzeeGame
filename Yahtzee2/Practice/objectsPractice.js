const btn = document.querySelector(".btn");
const hey = document.querySelectorAll("h1");

loadEventListeners();

function loadEventListeners(e) {
  btn.addEventListener("click", doThis);
}

const Game = {
  aces: [false, 6],
  twos: false,
  threes: false,
  fourse: false,
  fives: false,
  sixes: false,
  threeOfKind: false,
  fourOfKind: false,
  fullHouse: false,
  smStraight: false,
  lgStraight: false,
  yahtzee: false
};
Game.fullHouse = 20;

function doThis(e) {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  [].forEach.call(hey, function(ele) {
    ele.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
  console.log(document.querySelector("h1").style.backgroundColor);
  //e.target.childNodes.innerHTML = Game.aces;
  // console.log(typeof Game);
  e.preventDefault();
}
