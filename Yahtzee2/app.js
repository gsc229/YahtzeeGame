const roll = document.querySelector(".roll");
const useAces = document.getElementById("use-aces");

const useTwos = document.getElementById("use-twos");
const useThrees = document.getElementById("use-threes");
const useFours = document.getElementById("use-fours");
const useFives = document.getElementById("use-fives");
const useSixes = document.getElementById("use-sixes");

const diceRoll = {
  dice1: Math.ceil(Math.random() * 6),
  dice2: Math.ceil(Math.random() * 6),
  dice3: Math.ceil(Math.random() * 6),
  dice4: Math.ceil(Math.random() * 6),
  dice5: Math.ceil(Math.random() * 6)
};

const diceOne = diceRoll.dice1;
const diceTwo = diceRoll.dice2;
const diceThree = diceRoll.dice3;
const diceFour = diceRoll.dice4;
const diceFive = diceRoll.dice5;

const spellRoll = ["one", "two", "three", "four", "five", "six"];

const diceArr = [
  diceRoll.dice1,
  diceRoll.dice2,
  diceRoll.dice3,
  diceRoll.dice4,
  diceRoll.dice5
];

const spellRollArr = [
  spellRoll[diceOne - 1],
  spellRoll[diceTwo - 1],
  spellRoll[diceThree - 1],
  spellRoll[diceFour - 1],
  spellRoll[diceFive - 1]
];

console.log(spellRollArr);

// loadEventListeners();

// function loadEventListeners() {
roll.addEventListener("click", rollDice(diceArr, spellRollArr));
//   useAces.addEventListener("submit", Aces);
//   //useTwos.addEventListener("click", Twos);
//   // useThrees.addEventListener("click", Threes);
//   // useFours.addEventListener("click", Fours);
//   // useFives.addEventListener("click", Fives);
//   // useSixes.addEventListener("click", Sixes);
// }

// // !!!!!!!!!!! ROLL DICE !!!!!!!!!!!!!!!!!!!!!//
function rollDice(arr1, arr2) {
  // document.querySelector(".dice").style.display = "none";
  // document.querySelector(".dice-gif-container").style.display = "block";

  document.getElementById("1").className = `fas fa-dice-${
    spellRoll[diceOne - 1]
  }`;
  document.getElementById("2").className = `fas fa-dice-${
    spellRoll[diceTwo - 1]
  }`;
  document.getElementById("3").className = `fas fa-dice-${
    spellRoll[diceThree - 1]
  }`;
  document.getElementById("4").className = `fas fa-dice-${
    spellRoll[diceFour - 1]
  }`;
  document.getElementById("5").className = `fas fa-dice-${
    spellRoll[diceFive - 1]
  }`;
}
//   console.log(`diceArr: ${diceArr}`);
//   console.log(`spellArr: ${spellRollArr}`);
//   console.log(`${document.getElementById("points-aces")}`);

//   // SCORE SCENARIOS
//   if (
//     diceArr.indexOf(1) != -1 &&
//     document.getElementById("points-aces") == null
//   ) {
//     document.getElementById("use-aces").style.display = "block";
//     return diceArr;
//   }
//   // if (
//   //   diceArr.indexOf(2) != -1 &&
//   //   document.getElementById("points-twos") == null
//   // ) {
//   //   document.getElementById("use-twos").style.display = "block";
//   //   Twos(diceArr);
//   // }
// };

// //!!!!!!!!!!!!!!!!!!SCORING FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function Aces(e) {
//   alert("ACES!");

//   let scoreAces = 0;
//   for (let i = 0; i < diceArr.length; i++) {
//     if (diceArr[i] === 1) {
//       scoreAces += arr[i];
//     }
//   }
//   //!!!! CREATE SPAN REVMOVE BUTTONS!!!!!!!!!!!!!!!
//   const span = document.createElement("span");
//   const removeBtns = document.getElementsByClassName("use-aces");
//   for (let i = 0; i < removeBtns.length; i++) {
//     removeBtns[i].style.display = "none";
//   }

//   console.log(typeof removeBtns);
//   console.log(removeBtns);
//   span.className = "number-score";
//   span.id = "points-aces";
//   span.appendChild(document.createTextNode(scoreAces));
//   document.getElementById("game-one-aces").appendChild(span);
// }

// function Twos(arr) {
//   // alert("ACES!");

//   let scoreTwos = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 2) {
//       scoreTwos += arr[i];
//     }
//   }

//   const span = document.createElement("span");
//   const removeBtns = document.getElementsByClassName("use");
//   for (let i = 0; i < removeBtns.length; i++) {
//     removeBtns[i].style.display = "none";
//   }

//   console.log(typeof removeBtns);
//   console.log(removeBtns);
//   span.className = "number-score";
//   span.id = "points-twos";
//   span.appendChild(document.createTextNode(scoreTwos));
//   document.getElementById("game-one-twos").appendChild(span);
// }
