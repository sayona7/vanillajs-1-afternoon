/* JavaScript file for 
Vanilla Project
Author: Veronica Bakanowicz */

const arrayBoard = ["", "", "", "", "", "", "", "", ""];

function array() {
    for (i = 0; i < 9; i++) {
        if (arrayBoard[i] === "X" || arrayBoard[i] === "O") {
            console.log("element can't be replaced in array again");
        } else {
            arrayBoard.splice(i, 1, document.getElementById(i).innerText);
        }
    }
    console.log(arrayBoard);
}


function play(id) {
    const player = document.getElementById("player");
    const clickedBox = document.getElementById(id);

    if (clickedBox.innerText === "") {
        if (player.innerText === "X") {
            player.innerText = "O";
            clickedBox.innerText = "X";
        } else {
            player.innerText = "X";
            clickedBox.innerText = "O";
        }
    } else {
        console.log("can't change declared square");
    }
    
}

const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function determineWinner(arr) {


}



// Alert winner 

// if (winner = true) ? alert("`The winner is player ${}") : alert("Cat's game, there is no winner");


function clear() {
    for (let i = 0; i <= 8; i++) {
    document.getElementById(i).innerText = "";
    arrayBoard[i] = "";
    }

}

document.getElementById("reset-btn").addEventListener("click", clear);