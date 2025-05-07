function rock() {
  // this function generate random number
  //     variable = function p number p
  const computer1 = Math.random();

  // by placing this variable on top of the condition 
  // we can now access the randomNumber variable inside 
  // the curly Braces.
  // use let intead const so we can reassign different value
  // 
  let decide = "";

    // We use 1 and 0 and dvided it into 3 parts
    if (computer1 >= 0 && computer1 < 1 / 3) {
      decide = "rock";
    } else if (computer1 > 1 / 3 && computer1 < 2 / 3) {
      decide = "paper";
    } else if (computer1 >= 2 / 3 && computer1 < 1) {
      decide = "scissors";
    }

    let result = "";

    if (decide === "rock") {
      result = "Tie";
    } else if (decide === "scissors") {
      result = "You win";
    } else if (decide === "paper") {
      result = "You lose";
    }

  alert(`You pick rock. The computer pick ${decide} .  ${result}`);
}


function paper() {
  const computer2 = Math.random();
  let decide2 = "";

    if (computer2 >= 0 && computer2 < 1 / 3) {
      decide2 = "rock";
    } else if (computer2 >= 1 / 3 && computer2 < 2 / 3) {
      decide2 = "paper";
    } else if (computer2 >= 2 / 3 && computer2 < 1) {
      decide2 = "scissors";
    }

    let result2 = "";

    if (decide2 === "paper") {
      result2 = "Tie";
    } else if (decide2 === "rock") {
      result2 = "You win";
    } else if (decide2 === "scissors") {
      result2 = "You lose";
    }

  alert(`You pick paper. The computer pick ${decide2}. Result: ${result2}`);
}

function scissors(){
  const computer3 = Math.random();
  let decide3 = "";

    if (computer3 >= 0 && computer3 < 1 / 3) {
      decide3 = "scissors";
    } else if (computer3 >= 1 / 3 && computer3 < 2 / 3) {
      decide3 = "rock";
    } else if (computer3 >= 2 / 3 && computer3 < 1) {
      decide3 = "paper";
    }

    let result3 = "";

    if (decide3 === "scissors") {
      result3 = "tie";
    } else if (decide3 === "rock") {
      result3 = "You lose";
    } else if (decide3 === "paper") {
      result3 = "You win";
    }

  alert(`You pick scissors. The computer pick ${decide3}. Result: ${result3}`);
}