/* step - 1 */
//write the code inside the tag.

/* step - 2 */
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
