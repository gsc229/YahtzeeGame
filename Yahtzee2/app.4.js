//Two function expressions (not function declarations) one to set the arrays
// Problems:
// Dice are being counted multiple times.  id a push()method is bing called multiple times.
//Need to switch players
//Need to switch games
//Here is a change
//!!!!!!!!!!!!!GAMER VARIABLES!!!!!!!!!!!!!!!!!!!!!!!!
const roll = document.querySelector(".roll");
const useBtn = document.querySelectorAll(".use");
const addPoints = document.querySelector("table"); //works

const useAces = document.getElementById("use-aces");
const useTwos = document.getElementById("use-twos");
const useThrees = document.getElementById("use-threes");
const useFours = document.getElementById("use-fours");
const useFives = document.getElementById("use-fives");
const useSixes = document.getElementById("use-sixes");

//!!!!!! GLOBAL DICE AND POINTS!!!!!!

let points = 0;
let threeOfKindPoints = 0;
let fourOfKindPoints = 0;
let fullHousePoints = 0;
let smStraightPoints = 0;
let lgStraignPoints = 0;
let yahtzeePoints = 0;
let diceToScore; //works
let upperSubT = 0;
const upperBonus = 35;
let upperSecitonTotal = upperSubT;
//!!!!!!!!!!!!!!EVENT LISTENERS
loadEventListeners();
//Load all event listeners
function loadEventListeners() {
  //roll dice
  roll.addEventListener("click", rollDice);
  addPoints.addEventListener("click", score);
}

//!!!!!!!! ROLL THE DICE, CREATE AN ARRAY !!!!!!!!!!!!!!!!!!!
function rollDice(e) {
  const diceRoll = function() {
    return Math.ceil(Math.random() * 6);
  };

  // const diceArr = [diceRoll(), diceRoll(), diceRoll(), diceRoll(), diceRoll()];
  const diceArr = [4, 4, 4, 4, 5];
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

  //Set diceToScore equal to diceArr
  diceToScore = diceArr;
  console.log("Dice to Score " + diceToScore);
  giveOptions(diceToScore);
  //DISABLE ROLL BUTTON
  // roll.disabled = true;
  // roll.className = "btn btn-secondary";
  console.log(spellRollArr);

  e.preventDefault();
}
//!!!!!!!!!!!!!!!TAKE ARRAY, GIVE SCORE OPTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function giveOptions(arr) {
  if (
    arr.indexOf(1) != -1 &&
    document.getElementById("Aces").childElementCount == 1
  ) {
    document.getElementById("use-aces").style.display = "block";
  } else {
    document.getElementById("use-aces").style.display = "none";
  }

  if (
    arr.indexOf(2) != -1 &&
    document.getElementById("Twos").childElementCount == 1
  ) {
    document.getElementById("use-twos").style.display = "block";
  } else {
    document.getElementById("use-twos").style.display = "none";
  }

  if (
    arr.indexOf(3) != -1 &&
    document.getElementById("Threes").childElementCount == 1
  ) {
    document.getElementById("use-threes").style.display = "block";
  } else {
    document.getElementById("use-threes").style.display = "none";
  }

  if (
    arr.indexOf(4) != -1 &&
    document.getElementById("Fours").childElementCount == 1
  ) {
    document.getElementById("use-fours").style.display = "block";
  } else {
    document.getElementById("use-fours").style.display = "none";
  }

  if (
    arr.indexOf(5) != -1 &&
    document.getElementById("Fives").childElementCount == 1
  ) {
    document.getElementById("use-fives").style.display = "block";
  } else {
    document.getElementById("use-fives").style.display = "none";
  }

  if (
    arr.indexOf(6) != -1 &&
    document.getElementById("Sixes").childElementCount == 1
  ) {
    document.getElementById("use-sixes").style.display = "block";
  } else {
    document.getElementById("use-sixes").style.display = "none";
  }

  if (document.getElementById("Three-of-kind").childElementCount == 1) {
    for (let i = 0; i < arr.length + 1; i++) {
      var search = arr[i];

      var count = arr.reduce(function(accumulator, currentvalue) {
        return accumulator + (currentvalue === search);
      }, 0);

      if (count === 3) {
        document.getElementById("use-three-of-kind").style.display = "block";
        threeOfKindPoints += count * arr[i];
        console.log("Here's the count: " + count);
        console.log(count + " occurences of the number: " + arr[i]);
        console.log(typeof count);
        console.log("TOK points: " + threeOfKindPoints);
        break;
      } else {
        document.getElementById("use-three-of-kind").style.display = "none";
      }
    }
  }

  if (document.getElementById("Four-of-kind").childElementCount == 1) {
    for (let i = 0; i < arr.length + 1; i++) {
      var search = arr[i];

      var count = arr.reduce(function(accumulator, currentvalue) {
        return accumulator + (currentvalue === search);
      }, 0);

      if (count === 4) {
        document.getElementById("use-four-of-kind").style.display = "block";
        fourOfKindPoints += count * arr[i];
        console.log("Here's the count: " + count);
        console.log(count + " occurences of the number: " + arr[i]);
        console.log(typeof count);
        console.log("FOK points: " + fourOfKindPoints);
        break;
      } else {
        document.getElementById("use-four-of-kind").style.display = "none";
      }
    }
  }
}

//!!!!!!! ADD SCORE TO BOARD !!!!!!!!!!!!!!!
function score(e) {
  roll.disabled = false;
  roll.className = "btn btn-danger";
  useBtn.forEach(function(btn) {
    btn.style.display = "none";
  });

  let span = document.createElement("span");
  span.style.border = "solid 2px black";

  switch (e.target.id) {
    case "use-aces":
      for (let i = 0; i < diceToScore.length; i++) {
        if (diceToScore[i] === 1) {
          points += diceToScore[i];
        }
      }

      span.innerHTML = points;
      document.getElementById("Aces").appendChild(span);
      upperSubT += points;
      console.log("Points Added: " + points);
      console.log("Upper SubTotal: " + upperSubT);
      points = 0;
      console.log("Points Reset: " + points);
      break;

    case "use-twos":
      for (let i = 0; i < diceToScore.length; i++) {
        if (diceToScore[i] === 2) {
          points += diceToScore[i];
        }
      }

      span.innerHTML = points;
      document.getElementById("Twos").appendChild(span);
      upperSubT += points;
      console.log("Points Added: " + points);
      console.log("Upper SubTotal: " + upperSubT);
      points = 0;
      console.log("Points Reset: " + points);
      break;

    case "use-threes":
      for (let i = 0; i < diceToScore.length; i++) {
        if (diceToScore[i] === 3) {
          points += diceToScore[i];
        }
      }

      span.innerHTML = points;
      document.getElementById("Threes").appendChild(span);
      upperSubT += points;
      console.log("Points Added: " + points);
      console.log("Upper SubTotal: " + upperSubT);
      points = 0;
      console.log("Points Reset: " + points);
      break;

    case "use-fours":
      for (let i = 0; i < diceToScore.length; i++) {
        if (diceToScore[i] === 4) {
          points += diceToScore[i];
        }
      }

      span.innerHTML = points;
      document.getElementById("Fours").appendChild(span);
      upperSubT += points;
      console.log("Points Added: " + points);
      console.log("Upper SubTotal: " + upperSubT);
      points = 0;
      console.log("Points Reset: " + points);
      break;

    case "use-fives":
      for (let i = 0; i < diceToScore.length; i++) {
        if (diceToScore[i] === 5) {
          points += diceToScore[i];
        }
      }

      span.innerHTML = points;
      document.getElementById("Fives").appendChild(span);
      upperSubT += points;
      console.log("Points Added: " + points);
      console.log("Upper SubTotal: " + upperSubT);
      points = 0;
      console.log("Points Reset: " + points);
      break;

    case "use-sixes":
      for (let i = 0; i < diceToScore.length; i++) {
        if (diceToScore[i] === 6) {
          points += diceToScore[i];
        }
      }

      span.innerHTML = points;
      document.getElementById("Sixes").appendChild(span);
      upperSubT += points;
      console.log("Points Added: " + points);
      console.log("Upper SubTotal: " + upperSubT);
      points = 0;
      console.log("Points Reset: " + points);
      break;

    case "use-three-of-kind":
      span.innerHTML = threeOfKindPoints;
      document.getElementById("Three-of-kind").appendChild(span);
      break;

    case "use-four-of-kind":
      span.innerHTML = fourOfKindPoints;
      document.getElementById("Four-of-kind").appendChild(span);
      break;
  }

  let upperSubTElement = document.getElementById("upper-sub-total");
  upperSubTElement.innerText = upperSubT;
  let upperTotalElement = document.getElementById("upper-total");
  upperTotalElement.innerText = upperSubT;
  let bonusElemnt = document.getElementById("bonus-points");
  if (upperSubT >= 63) {
    upperSubT += 35;
    bonusElemnt.innerText = 35;
    upperTotalElement.innerText = upperSubT;
  }

  console.log("Category Used " + e.target.id);
}
