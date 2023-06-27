"use strict";

const btn = document.querySelector(".btn-switch");
const body = document.body;
const color = document.querySelector(".color");

const zufallsZahl = () => Math.floor(Math.random() * 256);

btn.addEventListener("click", function () {
  //? Schutzklausel
  if (!this) return;

  body.style.background = `rgb(${zufallsZahl()}, ${zufallsZahl()}, ${zufallsZahl()})`;
  color.textContent = `rgb(${zufallsZahl()}, ${zufallsZahl()}, ${zufallsZahl()})`;
});
