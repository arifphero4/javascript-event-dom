/* step - 1 */
//write the code inside the tag.

/* step - 2  "most important"*/
function makeRed() {
  document.body.style.backgroundColor = "red";
  document.getElementById("dom-title").style.color = "white";
}

/* step - 3 */
const blueButton = document.getElementById("make-blue");
blueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
  document.getElementById("dom-title").style.color = "red";
}

/* step - 4 */
const greenButton = document.getElementById("make-green");
greenButton.onclick = function () {
  document.body.style.backgroundColor = "green";
  document.getElementById("dom-title").style.color = "blue";
};

/* step - 5 */
const cyanButton = document.getElementById("make-cyan");
cyanButton.addEventListener("click", makeCyan);
function makeCyan() {
  document.body.style.backgroundColor = "cyan";
}

/* step - 6 */
const cadetBlueButton = document.getElementById("make-CadetBlue");
cadetBlueButton.addEventListener("click", function makeCadetBlue() {
  document.body.style.backgroundColor = " cadetBlue";
});

/* step - 7 "most important" */
document
  .getElementById("make-DarkOrchid")
  .addEventListener("click", function makeDarkOrchid() {
    document.body.style.backgroundColor = "darkOrchid";
  });
