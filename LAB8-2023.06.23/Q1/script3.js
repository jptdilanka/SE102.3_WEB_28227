const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");

function changeToRed() {
    document.body.style.backgroundColor = "red";
}

function changeToGreen() {
    document.body.style.backgroundColor = "green";
}

function changeToBlue() {
    document.body.style.backgroundColor = "blue";
}

function revertToNormal() {
    document.body.style.backgroundColor = "";
}

redBtn.addEventListener("mouseover", changeToRed);
greenBtn.addEventListener("mouseover", changeToGreen);
blueBtn.addEventListener("mouseover", changeToBlue);
redBtn.addEventListener("mouseout", revertToNormal);
greenBtn.addEventListener("mouseout", revertToNormal);
blueBtn.addEventListener("mouseout", revertToNormal);
