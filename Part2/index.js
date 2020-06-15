/* JavaScript File for Poker cards
Author: Weronika Bakanowicz
 */


/* Step 2 */
let inputOne = document.getElementById("id");
let inputTwo = document.getElementById("color");

/* Step 3 */

function setCard() {
	const card = document.getElementById(id.value);
	card.style.color = inputTwo.value;
}