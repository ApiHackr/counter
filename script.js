"use strict";

const PLUS_BTN = document.getElementById("increase");
const MINUS_BTN = document.getElementById("decrease");
const OUTPUT = document.getElementById("output");

let nr = 0;
// OUTPUT.innerHTML = nr;

function incAndDec() {
    PLUS_BTN.addEventListener("click", () => {
        nr += 1;
        OUTPUT.innerHTML = nr;
    })
    MINUS_BTN.addEventListener("click", () => {
        nr -=1;
        OUTPUT.innerHTML = nr;
    })
}
incAndDec();