"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 3;

//Event listeners//
function start() {
  console.log("Let the Games Begin!");
  points = 0;
  lives = 3;
  //Animationer start//
  document.querySelector("#karen_container").classList.add("karen");
  document.querySelector("#karen_container1").classList.add("karen1");
  document.querySelector("#kunde_container").classList.add("kunde");
  document.querySelector("#kunde_container1").classList.add("kunde1");

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
}

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
}

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
function incrementPoints() {
  console.log("du har fået et point");
  points++;
  displayIncrementPoints();
  if (points == 10) {
    gameWon();
  }
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
function gameOver() {
  console.log("game over biatch");
  document.querySelector("#game_over").classList.remove("hidden");
}
