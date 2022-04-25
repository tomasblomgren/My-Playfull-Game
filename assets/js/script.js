/* adding Eventlisteners and DOM*/

document.addEventListener ("DOMContentLoaded", function (){
let buttons = document.getElementsByTagName ("button");

for (let button of buttons) {
    button.addEventListener("click", function(){
        if (this.getAttribute("data-type")=== "submit") {
            alert("you clicked sumbit!");
        } else {
            let gametype = this.getAttribute("data-type");
            alert('You clicked '${gametype})
        }
    })
}
})

function rungame() {

// Creates two random numbers between 1 and 10
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;


}

function shufflecards() {

}

function stay () {

}

function another card (operand1, operand2) {

}
function give point () {
    if (calculate winner === "end game")
}
function add round () {
    
}
function end game () {
    
}
function calculate winner () {
    
}
function lose game () {
    
}