/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomFigure());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

let generateRandomFigure = () => {
  let figures = ["spade", "diamond", "club", "heart"];
  let randomFigure = Math.floor(Math.random() * figures.length);
  return figures[randomFigure];
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};
