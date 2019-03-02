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
const addPontsL = document.querySelector("#lower-table");
const useAces = document.getElementById("use-aces");
const useTwos = document.getElementById("use-twos");
const useThrees = document.getElementById("use-threes");
const useFours = document.getElementById("use-fours");
const useFives = document.getElementById("use-fives");
const useSixes = document.getElementById("use-sixes");

//!!!!!! GLOBAL DICE AND POINTS!!!!!!

let points = 0;

//Lower-section Points
let TwOKface = 0;
let ThOKface = 0;
let FOKface = 0;
let fullHousePoints = 0;
let smStraightPoints = 0;
let lgStraignPoints = 0;
let yahtzeePoints = 0;
let yahtzeeCount = 0;
let yahtzeeBonus = 0;
let diceToScore; //works

// Upper Totals
let upperSubT = 0;
const upperBonus = 35;
let upperSecitonTotal = upperSubT;
// Lower Totals
let lowerTotal = 0;

//!!!!!!!!!!!!!!EVENT LISTENERS
loadEventListeners();
//Load all event listeners
function loadEventListeners() {
  //roll dice
  roll.addEventListener("click", rollDice);
  addPoints.addEventListener("click", score);
  addPontsL.addEventListener("click", score);
}

//!!!!!!!! ROLL THE DICE, CREATE AN ARRAY !!!!!!!!!!!!!!!!!!!
function rollDice(e) {
  const diceRoll = function() {
    return Math.ceil(Math.random() * 6);
  };

  const diceArr = [diceRoll(), diceRoll(), diceRoll(), diceRoll(), diceRoll()];
  // const diceArr = [4, 2, 2, 2, 4];
  // const diceArr = [2, 3, 4, 4, 5];
  // const diceArr = [6, 3, 4, 4, 5];
  // const diceArr = [3, 2, 5, 4, 4];

  // Change the dice graphics
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
  // Performance for options

  giveOptions(diceToScore); //do something

  //DISABLE ROLL BUTTON
  // roll.disabled = true;
  // roll.className = "btn btn-secondary";
  console.log(spellRollArr);

  e.preventDefault();
}

//!!!!!!!!!!!!!!!TAKE ARRAY, GIVE SCORE OPTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function giveOptions(arr) {
  // var t0 = performance.now();

  //Chance
  if (document.getElementById("Chance").childElementCount == 1) {
    document.getElementById("use-chance").style.display = "block";
  }

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

  //!!!!!!! Combintation scenarios

  // three of a kind
  if (document.getElementById("Three-of-kind").childElementCount == 1) {
    for (let i = 0; i < arr.length + 1; i++) {
      var search = arr[i];

      var count = arr.reduce(function(accumulator, currentvalue) {
        return accumulator + (currentvalue === search);
      }, 0);

      if (count >= 3) {
        document.getElementById("use-three-of-kind").style.display = "block";
        ThOKface = arr[i];

        break;
      } else {
        document.getElementById("use-three-of-kind").style.display = "none";
        ThOKface = 0;
      }
    }
  }

  //four of a kind
  if (document.getElementById("Four-of-kind").childElementCount == 1) {
    for (let i = 0; i < arr.length + 1; i++) {
      var search = arr[i];

      var count = arr.reduce(function(accumulator, currentvalue) {
        return accumulator + (currentvalue === search);
      }, 0);

      if (count >= 4) {
        document.getElementById("use-four-of-kind").style.display = "block";
        FOKface = arr[i];

        break;
      } else {
        document.getElementById("use-four-of-kind").style.display = "none";
        FOKface = 0;
      }
    }
  }

  //Yahtzee

  for (let i = 0; i < arr.length + 1; i++) {
    var search = arr[i];

    var count = arr.reduce(function(accumulator, currentvalue) {
      return accumulator + (currentvalue === search);
    }, 0);

    if (count === 5) {
      document.getElementById("use-yahtzee").style.display = "block";
      yahtzeePoints = 50;
      break;
    } else {
      document.getElementById("use-yahtzee").style.display = "none";
      yahtzeePoints = 0;
    }
  }

  // full house

  if (document.getElementById("Full-house").childElementCount == 1) {
    for (let i = 0; i < arr.length + 1; i++) {
      var searchTwOK = arr[i];

      var countForTwOK = arr.reduce(function(accumulator, currentvalue) {
        return accumulator + (currentvalue === searchTwOK);
      }, 0);

      if (countForTwOK === 2 && ThOKface != 0) {
        TwOKface = arr[i];
        document.getElementById("use-full-house").style.display = "block";

        break;
      } else {
        document.getElementById("use-full-house").style.display = "none";
        TwOKface = 0;
      }
    }
  }

  //Large Straight
  if (document.getElementById("Large-straight").childElementCount == 1) {
    const sorted = arr.sort();
    let count = 0;

    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i + 1] - sorted[i] === 1) {
        count++;
      }
    }

    if (count === 4) {
      document.getElementById("use-lg-straight").style.display = "block";
      lgStraignPoints = 40;
    } else {
      document.getElementById("use-lg-straight").style.display = "none";
    }
  }
  //Small Straight
  if (document.getElementById("Small-straight").childElementCount == 1) {
    const sorted2 = arr.sort();
    //remove duplicated values
    for (let i = 0; i < sorted2.length; i++) {
      if (sorted2.lastIndexOf(sorted2[i]) != i) {
        sorted2.splice(i, 1);
      }
    }

    console.log(`Spliced arr ${sorted2}`);
    //count the number of gaps equal to 1
    let count = 0;

    for (let i = 0; i < sorted2.length + 1; i++) {
      if (sorted2[2] - sorted2[1] !== 1 || sorted2[3] - sorted2[2] !== 1) {
        break;
      } else if (sorted2[i + 1] - sorted2[i] === 1) {
        count++;
      }
    }

    if (count >= 3) {
      document.getElementById("use-sm-straight").style.display = "block";
      smStraightPoints = 30;
    } else if (count === 3 && sSwitch) {
      document.getElementById("use-sm-straight").style.display = "block";
      smStraightPoints = 30;
    } else {
      document.getElementById("use-sm-straight").style.display = "none";
      document.getElementById("use-lg-straight").style.display = "none";
    }
  }
}

//!!!!!!! ADD SCORE TO BOARD !!!!!!!!!!!!!!!
function score(e) {
  // var t2 = performance.now();
  roll.disabled = false;
  roll.className = "btn btn-danger";
  useBtn.forEach(function(btn) {
    btn.style.display = "none";
  });

  let span = document.createElement("span");
  let check = document.createElement("i");
  check.className = "fas fa-check";
  check.setAttribute("style", "font-size: 10px;");
  // span.className = "score-span";

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

      break;

    case "use-three-of-kind":
      span.innerHTML = ThOKface * 3;
      document.getElementById("Three-of-kind").appendChild(span);
      lowerTotal += ThOKface * 3;
      ThOKface = 0;
      console.log("TOK reset? " + ThOKface);
      break;

    case "use-four-of-kind":
      span.innerHTML = FOKface * 4;
      document.getElementById("Four-of-kind").appendChild(span);
      lowerTotal += FOKface * 4;
      FOKface = 0;
      break;

    case "use-full-house":
      span.innerHTML = 25;
      document.getElementById("Full-house").appendChild(span);
      lowerTotal += 25;

      break;
    case "use-sm-straight":
      span.innerHTML = smStraightPoints;
      document.getElementById("Small-straight").appendChild(span);
      lowerTotal += smStraightPoints;
      smStraightPoints = 0;
      lgStraignPoints = 0;
      break;
    case "use-lg-straight":
      span.innerHTML = lgStraignPoints;
      document.getElementById("Large-straight").appendChild(span);
      lowerTotal += lgStraignPoints;
      smStraightPoints = 0;
      lgStraignPoints = 0;
      break;

    case "use-yahtzee":
      if (yahtzeeCount == 0) {
        span.innerHTML = yahtzeePoints;
        document.getElementById("Yahtzee").appendChild(span);
        yahtzeeCount++;

        lowerTotal += yahtzeePoints;
        yahtzeePoints = 0;
        console.log(`Yahtzee Count: ${yahtzeeCount}`);
      } else if (yahtzeeCount >= 1 && yahtzeeCount <= 3) {
        yahtzeeBonus += 100;
        lowerTotal += 100;
        yahtzeeCount++;
        document.querySelector(
          `#yahtzee-bonus-checks td:nth-Child(${yahtzeeCount - 1})`
        ).style = "background-color: aqua;";
        document
          .querySelector(
            `#yahtzee-bonus-checks td:nth-Child(${yahtzeeCount - 1})`
          )
          .appendChild(check);
        document.querySelector(
          "#yahtzee-bonus-total td"
        ).innerText = yahtzeeBonus;
        console.log(`
      Yahtzee Count: ${yahtzeeCount}
      Yahtzee Bonus: ${yahtzeeBonus}
      ${
        document.querySelector(`#yahtzee-bonus-checks td:nth-Child(1)`)
          .innerText
      }
      `);
      }

      break;
    case "use-chance":
      let chancePoints = diceToScore.reduce(function(acc, curr) {
        return acc + curr;
      }, 0);
      span.innerHTML = chancePoints;
      document.getElementById("Chance").appendChild(span);
      lowerTotal += chancePoints;
      chancePoints = 0;
  }
  // Upper Sub Total
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

  // Lower Sub Total
  let lowerUpperTotal = document.getElementById("lower-upper-total");
  lowerUpperTotal.innerText = upperSubT;
  let lowerTotalScore = document.getElementById("lower-total");
  lowerTotalScore.innerText = lowerTotal;
  //Grand total
  let grandTotal = upperSubT + lowerTotal;
  let grandTotalScore = document.getElementById("grand-total");
  grandTotalScore.innerText = grandTotal;

  // Yahtzee Bonus

  //

  // console.log(`Points Added: ${points}`);
  // points = 0;
  // console.log(`Points Reset: ${points}`);
  // console.log(`Category Used: ${e.target.id}`);
  // console.log(`
  // UpperTotal: ${upperSubT}
  // LowerTotal: ${lowerTotal}
  // GrandTotal: ${grandTotal}
  // `);
  // var t3 = performance.now();

  // console.log("Call to score: " + (t3 - t2) + " milliseconds.");
}
