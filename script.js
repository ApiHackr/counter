"use strict";

const PLUS_BTN = document.getElementById("increase");
const MINUS_BTN = document.getElementById("decrease");
const OUTPUT = document.getElementById("output");

let nr = 0;

function incAndDec() {
    PLUS_BTN.onclick = () => {
        nr++;
        OUTPUT.innerHTML = nr;
    }
    MINUS_BTN.onclick = () => {
        nr--;
        OUTPUT.innerHTML = nr;
    }
}
incAndDec();