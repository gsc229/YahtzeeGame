//Two function expressions (not function declarations) one to set the arrays
// Problems:
// Dice are being counted multiple times.  id a push()method is bing called multiple times.
//Need to switch players
//Need to switch games
//Here is a change
//!!!!!!!!!!!!!GAMER VARIABLES!!!!!!!!!!!!!!!!!!!!!!!!
const roll = document.querySelector(".roll");
const addPointsBtn = document.querySelectorAll(".use");
const useAces = document.getElementById("use-aces");
const useTwos = document.getElementById("use-twos");
const useThrees = document.getElementById("use-threes");
const useFours = document.getElementById("use-fours");
const useFives = document.getElementById("use-fives");
const useSixes = document.getElementById("use-sixes");

const useBtn = document.querySelector("table"); //works

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

//!!!!!!!! ROLL THE DICE, CREATE AN ARRAY !!!!!!!!!!!!!!!!!!!
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
  roll.disabled = true;
  roll.className = "btn btn-secondary";
  //console.log(diceArr, spellRollArr);
  setScore(diceArr);
  e.preventDefault();
}
//!!!!!!!!!!!!!!!TAKE ARRAY, GIVE SCORE OPTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const setScore = function(arr) {
  // console.log(arr);

  //Check to see if number is rolled and score exists
  if (
    arr.indexOf(1) != -1 &&
    document.getElementById("Aces").childElementCount == 1
  ) {
    useAces.style.display = "block";
    document.getElementById("use-aces").addEventListener("mousedown", pushAces);
    function pushAces(e) {
      let addPoints = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
          addPoints.push(arr[i]);
          showScore(addPoints);

          console.log("UseOne's: " + addPoints);
        }
      }
      addPoints = [];
    }
  } else {
    useAces.style.display = "none";
  }
  // //TWOS
  if (
    arr.indexOf(2) != -1 &&
    document.getElementById("Twos").childElementCount == 1
  ) {
    useTwos.style.display = "block";
    document.getElementById("use-twos").addEventListener("mousedown", pushTwos);
    function pushTwos(e) {
      let addPoints = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
          addPoints.push(arr[i]);
          showScore(addPoints);

          console.log("UseTwos: " + addPoints);
        }
      }
      addPoints = [];
    }
  } else {
    useTwos.style.display = "none";
  }
  // //THREES
  if (
    arr.indexOf(3) != -1 &&
    document.getElementById("Threes").childElementCount == 1
  ) {
    useThrees.style.display = "block";
    document
      .getElementById("use-threes")
      .addEventListener("mousedown", pushThrees);
    function pushThrees(e) {
      let addPoints = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
          addPoints.push(arr[i]);
          showScore(addPoints);

          console.log("UseThrees: " + addPoints);
        }
      }
      addPoints = [];
    }
  } else {
    useThrees.style.display = "none";
  }

  // //FOURS

  if (
    arr.indexOf(4) != -1 &&
    document.getElementById("Fours").childElementCount == 1
  ) {
    useFours.style.display = "block";
    document
      .getElementById("use-fours")
      .addEventListener("mousedown", pushFours);
    function pushFours(e) {
      let addPoints = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 4) {
          addPoints.push(arr[i]);
          showScore(addPoints);

          console.log("UseFours: " + addPoints);
        }
      }
      addPoints = [];
    }
  } else {
    useFours.style.display = "none";
  }

  // //FIVES
  if (
    arr.indexOf(5) != -1 &&
    document.getElementById("Fives").childElementCount == 1
  ) {
    useFives.style.display = "block";
    document
      .getElementById("use-fives")
      .addEventListener("mousedown", pushFives);
    function pushFives(e) {
      let addPoints = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
          addPoints.push(arr[i]);
          showScore(addPoints);

          console.log("UseFives: " + addPoints);
        }
      }
      addPoints = [];
    }
  } else {
    useFives.style.display = "none";
  }

  // //SIXES
  if (
    arr.indexOf(6) != -1 &&
    document.getElementById("Sixes").childElementCount == 1
  ) {
    useSixes.style.display = "block";
    document
      .getElementById("use-sixes")
      .addEventListener("mousedown", pushSixes);
    function pushSixes(e) {
      let addPoints = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 6) {
          addPoints.push(arr[i]);
          showScore(addPoints);
          console.log("UseSixes: " + addPoints);
        }
      }
      addPoints = [];
    }
  } else {
    useSixes.style.display = "none";
  }

  // <button
  //   onclick="Aces()"
  //   type="submit"
  //   id="use-aces"
  //   class="use btn btn-danger"
  // >
};

//!!!!!!!!!!!!!!! SET SCORE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function showScore(arr) {
  //e.target.parentElement.appendChild("<span>The score</span>");
  console.log(arr);
  const span = document.createElement("span");
  const parent = e.target.parentNode;

  span.className = "score";
  span.appendChild(
    document.createTextNode(
      arr.reduce(function(x, y) {
        return x + y;
      }, 0)
    )
  );

  if (e.target.classList.contains("use")) {
    parent.appendChild(span);
    e.target.setAttribute("style", "display: none;");
    addPointsBtn.forEach(function(ele) {
      ele.setAttribute("style", "none");
    });
    diceToScore = [];
  }

  roll.disabled = false;
  roll.className = "btn btn-danger";

  e.preventDefault();
}
// Calculate the score when .use is clicked
// Button disappears
// Cell is set equal to the number of points
