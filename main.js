var entrance = "Ahead of you lies a journey not for the faint of heart. You must be quick and strong in body and spirit. Do you dare enter the castle of terror??? Type yes or no.";
var answer;
var leftOrRight;
var ladder;
var wrongAnswer = "Uh oh! Looks like the castle doesn't recognize that. Try putting in something else.";
var fairyNumber;
var thisThat;


function yesOrNo() {
  answer = prompt(entrance).toLowerCase();
  toEnter(answer);
}

function toEnter(answer) {
  if (answer === "yes") {
    leftOrRight = prompt("Welcome to the Castle! If you are physically strong, walk right. If you are mentally strong, walk left.").toLowerCase();
    walkThisWay(leftOrRight);
  }
  else if (answer === "no") {
    console.log("You are a miserable human who isn't worthy of the castle's riches, goodbye.");
  }
  else {
    console.log(wrongAnswer);
    yesOrNo();
  }
}

function walkThisWay(leftOrRight) {
  if (leftOrRight === "right") {
    ladder = Number(prompt("You've reached a broken ladder. At the foot of the ladder is a tiny fairy. She says she can mend the rungs long enough for you to get to the top, but only if you can guess the number she's thinking of... If you're up for it pick a number 0-10... "));
    endHigh(ladder);
  }
  else if (leftOrRight === "left") {
    stairs = Number(prompt("You've reached a set of stairs. It takes you deep into the dungeon of the castle. You come to a gate with some sort of combination lock. It looks like you're missing one number to complete the special code. The other numbers (in order) are 3, 4, 6, 10. You're job is to correctly enter the next and final number in the code. Give it a crack if you think you have what it takes. Your guess: "));
    endLow(stairs);
  }
  else {
    console.log(wrongAnswer);
    toEnter(answer);
  }
}

function endHigh(ladder) {
  fairyNumber = Math.floor(Math.random() * 11)
  if (ladder === fairyNumber) {
    console.log("Congratulations you've made it to the top!! All around you you see the bones of those who have come before you and perished. Take a moment to bask in your glory. Then leave. Quickly. Next time you won't be so lucky.");
  }
  else if (ladder != fairyNumber) {
    console.log("Oh no! You've guessed the wrong number. The fairy transforms into a giant beast and eats you in 3 bites. The correct number was " + fairyNumber);
  }
  else {
    console.log(wrongAnswer);
    walkThisWay(leftOrRight);
  }
}
function endLow(stairs) {
  if (stairs === 18) {
    thisThat = prompt("You're smarter than you look! Congrats on getting past the gate code. One small problem though - You're being chased by an angry mob of mummies that you woke up with your loud thinking back at the gate. You better run! There are two open paths. One leads out, one leads to eminent death. Choose wisely. This way or That way?").toLowerCase();
    endDungeon(thisThat);
  }
  else if (stairs != 18) {
    console.log("You probably should've gone the other direction if you didn't have the brains to take this path. You woke up a group of sleeping mummies who heard all your loud and cacaphonic thinking. They ate you. Bummer.");
  }
  else {
    console.log(wrongAnswer);
    walkThisWay(leftOrRight);
  }
}
function endDungeon(thisThat) {
  if (thisThat === "that way") {
    console.log("Whew! That was a close one. You chose correctly and have ended up on the outskirts of the castle grounds. I'd get out of here quick if I were you.");
  }
  else if (thisThat === "this way") {
    console.log("Yikes... You're not going to like this but you've reached a dead end and the mummies ate your face off. Bye forever!");
  }
  else {
    console.log(wrongAnswer);
    endLow(stairs);
  }
}
