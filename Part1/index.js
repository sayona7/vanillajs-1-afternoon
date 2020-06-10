/* JavaScript file for 
Vanilla Project
Author: Veronica Bakanowicz */


/* Step 4 */
const array = [];
const one = document.getElementById("0");
const two = document.getElementById("1");
const three = document.getElementById("2");
const four = document.getElementById("3");
const five = document.getElementById("4");
const six = document.getElementById("5");
const seven = document.getElementById("6");
const eight = document.getElementById("7");
const nine = document.getElementById("8");



/* Step 2 & 3 */
/* Function Play */

function play(id) {
    const player = document.getElementById("player");
    const clickedBox = document.getElementById(id);

    if (player.innerText === "X") {
        player.innerText = "O";
        clickedBox.innerText = "X";
        array[id] = "X";
    } else {
        player.innerText = "X";
        clickedBox.innerText = "O"
        array[id] = "0";
    }

    console.log(array);
    
}

