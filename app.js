"use strict";
window.addEventListener("load", startScreen);

let points = 0;
let lives = 3;

// Start Skærm//
function startScreen() {
  console.log("ready to rumble");
  document.querySelector("#startknap").addEventListener("click", start);
  document
    .querySelector("#genstart")
    .addEventListener("click", showStartScreen);
  document
    .querySelector("#genstart1")
    .addEventListener("click", showStartScreen);
}
function showStartScreen() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}
//Event listeners//
function start() {
  console.log("Let the Games Begin!");
  resetLives();
  resetPoints();
  showGameScreen();
  restartAnimations();
  resetTimer();
  startTimer();
  document.querySelector("#baggrundsmusik").currentTime = 0;
  document.querySelector("#game_start").currentTime = 0;
  document.querySelector("#game_start").play();
  setTimeout(function () {
    document.querySelector("#baggrundsmusik").play();
  }, 3000);
  document.querySelector("#start").classList.add("hidden");
  //Animationer start//
  document.querySelector("#karen_container").classList.add("karen");
  document.querySelector("#karen_container1").classList.add("karen1");
  document.querySelector("#kunde_container").classList.add("kunde");
  document.querySelector("#kunde_container1").classList.add("kunde1");

  //Genstart funktioner//
  function resetLives() {
    lives = 3;
    document.querySelector("#heart1").classList.remove("broken_heart");
    document.querySelector("#heart2").classList.remove("broken_heart");
    document.querySelector("#heart3").classList.remove("broken_heart");
    document.querySelector("#heart1").classList.add("active_heart");
    document.querySelector("#heart2").classList.add("active_heart");
    document.querySelector("#heart3").classList.add("active_heart");
  }
  function resetPoints() {
    points = 0;
    displayIncrementPoints();
  }
  function showGameScreen() {
    document.querySelector("#start").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
  }
  function restartAnimations() {
    document.querySelector("#karen_container").classList.remove("paused");
    document.querySelector("#kunde_container").classList.remove("paused");
    document.querySelector("#karen_container1").classList.remove("paused");
    document.querySelector("#kunde_container1").classList.remove("paused");
    document.querySelector("#karen_container1").classList.remove("zoom_out");
    document.querySelector("#karen_container").classList.remove("zoom_out");
    document.querySelector("#kunde_container1").classList.remove("zoom_out");
    document.querySelector("#kunde_container").classList.remove("zoom_out");
    document.querySelector("#karen_container").classList.remove("karen");
    document.querySelector("#karen_container1").classList.remove("karen1");
    document.querySelector("#kunde_container").classList.remove("kunde");
    document.querySelector("#kunde_container1").classList.remove("kunde1");
    document.querySelector("#kunde_container1").offsetWidth;
    document.querySelector("#kunde_container").offsetWidth;
    document.querySelector("#karen_container1").offsetWidth;
    document.querySelector("#karen_container").offsetWidth;
  }
  //Animationer klik //
  document
    .querySelector("#karen_container")
    .addEventListener("click", clickKaren);
  document
    .querySelector("#kunde_container")
    .addEventListener("click", clickKunde);
  document
    .querySelector("#karen_container1")
    .addEventListener("click", clickKaren1);
  document
    .querySelector("#kunde_container1")
    .addEventListener("click", clickKunde1);
}
//Funktionerne//

//Klik på Karen//
function clickKaren() {
  console.log("du har klikket en karen");
  document
    .querySelector("#karen_container")
    .removeEventListener("click", clickKaren);
  document.querySelector("#karen_container").classList.add("paused");
  document.querySelector("#karen_sprite").classList.add("zoom_out");
  document
    .querySelector("#karen_container")
    .addEventListener("animationend", karenRestart);
  incrementPoints();
  document.querySelector("#karenklik").currentTime = 0;
  document.querySelector("#karenklik").play();
}

function clickKaren1() {
  console.log("du har klikket en karen1");
  document
    .querySelector("#karen_container1")
    .removeEventListener("click", clickKaren1);
  document.querySelector("#karen_container1").classList.add("paused");
  document.querySelector("#karen_sprite1").classList.add("zoom_out");
  document
    .querySelector("#karen_container1")
    .addEventListener("animationend", karenRestart1);
  incrementPoints();
  document.querySelector("#karenklik").currentTime = 0;
  document.querySelector("#karenklik").play();
}
// Genstart Animation Karen //
function karenRestart() {
  console.log("Karen starter igen");
  document
    .querySelector("#karen_container")
    .removeEventListener("animationend", karenRestart);
  document.querySelector("#karen_container").classList.remove("paused");
  document.querySelector("#karen_sprite").classList.remove("zoom_out");
  document.querySelector("#karen_container").classList.remove("karen");
  document.querySelector("#karen_container").offsetWidth;
  document.querySelector("#karen_container").classList.add("karen");
  document
    .querySelector("#karen_container")
    .addEventListener("click", clickKaren);
}

function karenRestart1() {
  document
    .querySelector("#karen_container1")
    .removeEventListener("animationend", karenRestart1);
  document.querySelector("#karen_container1").classList.remove("paused");
  document.querySelector("#karen_sprite1").classList.remove("zoom_out");
  document.querySelector("#karen_container1").classList.remove("karen1");
  document.querySelector("#karen_container1").offsetWidth;
  document.querySelector("#karen_container1").classList.add("karen1");
  document
    .querySelector("#karen_container1")
    .addEventListener("click", clickKaren1);
}
// Klik på Kunde //
function clickKunde() {
  console.log("du har klikket en kunde");
  document
    .querySelector("#kunde_container")
    .removeEventListener("click", clickKunde);
  document.querySelector("#kunde_container").classList.add("paused");
  document.querySelector("#kunde_sprite").classList.add("zoom_out");
  document
    .querySelector("#kunde_container")
    .addEventListener("animationend", kundeRestart);
  decrementLives();
  document.querySelector("#godtklik").currentTime = 0;
  document.querySelector("#godtklik").play();
}

function clickKunde1() {
  console.log("du har klikket en kunde1");
  document
    .querySelector("#kunde_container1")
    .removeEventListener("click", clickKunde1);
  document.querySelector("#kunde_container1").classList.add("paused");
  document.querySelector("#kunde_sprite1").classList.add("zoom_out");
  document
    .querySelector("#kunde_container1")
    .addEventListener("animationend", kundeRestart1);
  decrementLives();
  document.querySelector("#godtklik").currentTime = 0;
  document.querySelector("#godtklik").play();
}
// Genstart Animation Kunde //
function kundeRestart() {
  console.log("Kunde starter igen");
  document
    .querySelector("#kunde_container")
    .removeEventListener("animationend", kundeRestart);
  document.querySelector("#kunde_container").classList.remove("paused");
  document.querySelector("#kunde_sprite").classList.remove("zoom_out");
  document.querySelector("#kunde_container").classList.remove("kunde");
  document.querySelector("#kunde_container").offsetWidth;
  document.querySelector("#kunde_container").classList.add("kunde");
  document
    .querySelector("#kunde_container")
    .addEventListener("click", clickKunde);
}
function kundeRestart1() {
  document
    .querySelector("#kunde_container1")
    .removeEventListener("animationend", kundeRestart1);
  document.querySelector("#kunde_container1").classList.remove("paused");
  document.querySelector("#kunde_sprite1").classList.remove("zoom_out");
  document.querySelector("#kunde_container1").classList.remove("kunde1");
  document.querySelector("#kunde_container1").offsetWidth;
  document.querySelector("#kunde_container1").classList.add("kunde1");
  document
    .querySelector("#kunde_container1")
    .addEventListener("click", clickKunde1);
}
// Scoreboard//
function incrementPoints() {
  console.log("du har fået et point");
  points++;
  displayIncrementPoints();
  /* if (points >= 10) {
    gameWon();
  } */
}
function displayIncrementPoints() {
  document.querySelector("#point_count").textContent = points;
}

function decrementLives() {
  console.log("decrementLives");
  console.log("lives");
  displayDecrementLives();
  lives--;
  if (lives <= 0) {
    gameOver();
  }
}
function displayDecrementLives() {
  console.log("heart+lives");
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

//Timer//
function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);
}
function timeIsUp() {
  console.log("Time is up");
  if (points >= 10) {
    gameWon();
  } else {
    gameOver();
  }
}
function resetTimer() {
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#time_sprite").offsetWidth;
}
// Game Over//
function gameOver() {
  console.log("game over biatch");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#baggrundsmusik").pause();
  document.querySelector("#gameover").play();
}
// Level Complete //
function gameWon() {
  console.log("You defeated the Karens");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#baggrundsmusik").pause();
  document.querySelector("#level_complete_sound").play();
}
