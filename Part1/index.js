/* JavaScript file for 
Vanilla Project
Author: Veronica Bakanowicz */

/* Variable Declaration */

const arrayBoard = ["", "", "", "", "", "", "", "", ""];

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

/* Board tracking, Winning and Tie */

function array() {
    for (i = 0; i < 9; i++) {
        if (arrayBoard[i] === "X" || arrayBoard[i] === "O") {
            console.log("element can't be replaced in array again");
        } else {
            arrayBoard.splice(i, 1, document.getElementById(i).innerText);
        }
    }

    let winner = null;
    winning.forEach((combo, index) => {
        if (arrayBoard[combo[0]] && arrayBoard[combo[0]] === arrayBoard[combo[1]] && arrayBoard[combo[0]] === arrayBoard[combo[2]]) {
            winner = arrayBoard[combo[0]];
            console.log(winner);
        }
    });

    if (winner) {
        console.log(winner);
    } else if (arrayBoard.includes("")) {
        console.log(null);
    } else {
        alert("Cat's game, there is no winner.");
        clear();
    }

    console.log(arrayBoard);
}

/* Main Function */

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


/* Resetting anf Event Listener */

function clear() {
    for (let i = 0; i <= 8; i++) {
        document.getElementById(i).innerText = "";
        arrayBoard[i] = "";
    }
}

document.getElementById("reset-btn").addEventListener("click", clear);