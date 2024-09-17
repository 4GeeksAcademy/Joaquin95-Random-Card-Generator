/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

const suits = ["♥", "♦", "♣", "♠"];
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function generateRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  const topLeft = document.getElementsByClassName("top-left")[0];
  const bottomRight = document.getElementsByClassName("bottom-right")[0];
  const center = document.getElementsByClassName("center")[0];

  topLeft.innerHTML = `${randomSuit}`;
  bottomRight.innerHTML = `${randomSuit}`;

  center.innerHTML = `${randomRank}`;

  if (randomSuit === "♥" || randomSuit === "♦") {
    topLeft.style.color = "red";
    bottomRight.style.color = "red";
    center.style.color = "red";
  } else {
    topLeft.style.color = "black";
    bottomRight.style.color = "black";
    center.style.color = "black";
  }
}
document
  .getElementsByClassName("generateCardBtn")[0]
  .addEventListener("click", generateRandomCard);
