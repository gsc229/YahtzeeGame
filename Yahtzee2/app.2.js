//Two function expressions (not function declarations) one to set the arrays

//!!!!!!!!!!!!!GAMER VARIABLES!!!!!!!!!!!!!!!!!!!!!!!!
const roll = document.querySelector(".roll");
const useAces = document.getElementById("use-aces");
const scoreAces = document.getElementById("use-aces"); //works
const useBtn = document.querySelector("table"); //works

console.log(scoreAces.getAttribute("id")); //works

//!!!!!! DICE OBJECTS!!!!!!

let pointsAces = 0;
let diceToScore = []; //works

//!!!!!!!!!!!!!!EVENT LISTENERS
loadEventListeners();
//Load all event listeners
function loadEventListeners() {
  //roll dice
  roll.addEventListener("click", rollDice);
  //use points
  useBtn.addEventListener("click", showScore); //works
}

//!!!!!!!! ROLL THE DICE !!!!!!!!!!!!!!!!!!!
function rollDice(e) {
  const diceRoll = function() {
    return Math.ceil(Math.random() * 6);
  };

  const diceArr = [diceRoll(), diceRoll(), diceRoll(), diceRoll(), diceRoll()];
  const spellRoll = ["one", "two", "three", "four", "five", "six"];
  const spellRollArr = [
    spellRoll[diceArr[0] - 1],
    spellRoll[diceArr[1] - 1],
    spellRoll[diceArr[2] - 1],
    spellRoll[diceArr[3] - 1],
    spellRoll[diceArr[4] - 1]
  ];

  document.getElementById("1").className = `fas fa-dice-${spellRollArr[0]}`;
  document.getElementById("2").className = `fas fa-dice-${spellRollArr[1]}`;
  document.getElementById("3").className = `fas fa-dice-${spellRollArr[2]}`;
  document.getElementById("4").className = `fas fa-dice-${spellRollArr[3]}`;
  document.getElementById("5").className = `fas fa-dice-${spellRollArr[4]}`;

  //DISABLE ROLL BUTTON
  // roll.disabled = true;
  // roll.className = "btn btn-secondary";
  //console.log(diceArr, spellRollArr);
  setScore(diceArr);
  e.preventDefault();
}
//!!!!!!!!!!!!!!!SET SCORE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const setScore = function(arr) {
  console.log(arr);

  //Check to see if number is rolled and score exists
  if (
    arr.indexOf(1) != -1 &&
    document.getElementById("Aces").childElementCount == 1
  ) {
    useAces.style.display = "block";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        diceToScore.push(arr[i]);
      }
    } //works
    console.log(`Dice array above: ${diceToScore}`);
  } else {
    document.getElementById("use-aces").style.display = "none";
  }

  // <button
  //   onclick="Aces()"
  //   type="submit"
  //   id="use-aces"
  //   class="use btn btn-danger"
  // >
};

function showScore(e) {
  //e.target.parentElement.appendChild("<span>The score</span>");
  const givePoints = diceToScore.reduce(function(x, y) {
    x + y;
  });

  const span = document.createElement("span");
  const parent = e.target.parentNode;
  let scoreThis = e.target.parentNode.getAttribute("id");
  span.className = "score";
  span.appendChild(
    document.createTextNode(
      diceToScore.reduce(function(x, y) {
        //couldn't assign this to a variable
        return x + y;
      })
    )
  );
  if (e.target.classList.contains("use")) {
    parent.appendChild(span);
    e.target.setAttribute("style", "display: none;");
    diceToScore = [];

    console.log("Dice to score below: " + diceToScore);
  }
  console.log("Reduce through givePoints below " + givePoints);

  roll.disabled = false;
  roll.className = "btn btn-danger";

  e.preventDefault();
}
// Calculate the score when .use is clicked
// Button disappears
// Cell is set equal to the number of points
