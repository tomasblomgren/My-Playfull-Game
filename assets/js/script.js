/* adding Eventlisteners and DOM*/



document.addEventListener ("DOMContentLoaded", function (){
let buttons = document.getElementsByTagName ("button");
var content = document.getElementById("content");
var button = document.getElementById("rungame");
var startButton = document.getElementById("startgame");
startButton.addEventListener("click", rungame);
for (let button of buttons) {
    button.addEventListener("click", function(){
        if (this.getAttribute("data-type")=== "submit") {
            alert("you clicked sumbit!");
        } 
    })
}
})

function rungame() {
console.log("gameshouldstart");    

}
 

function gamearea() {
document.getElementById("gamearea").addEventListener("click",function(gamearea)

{ 
    console.log("gamearea clicked");
});
}

document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("stay");
    var startButton = document.getElementById("nomorecards");
    startButton.addEventListener("click", stay);
    
    });


function stay () {
console.log("nomorecardsallowed");
}
document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("card");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", card);
    });
    

function card () {
  // Creates two random numbers between 1 and 10
  let num1 = Math.floor(Math.random() * 11) + 1;
  let num2 = Math.floor(Math.random() * 11) + 1;

console.log("recieve card")
}

document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("split");
    var startButton = document.getElementById("divideamount");
    startButton.addEventListener("click", split);
    
    });


function split () {
console.log("divide full amount")    
}


document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("givepoint");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", givepoint);
   
    });
    function givepoint () {

    }
    document.addEventListener ("DOMContentLoaded", function (){
        let buttons = document.getElementsByTagName ("button");
        var content = document.getElementById("content");
        var button = document.getElementById("shufflecards");
        var startButton = document.getElementById("randomisecars");
        startButton.addEventListener("click", shufflecards);
        
        });
    
    
    function shufflecards () {
    console.log("shuffles cards");
    }

document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("card");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", card);
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")=== "submit") {
                alert("you clicked submit!");
            } 
        })
    }
    })
function addround () {
    
}
document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("card");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", card);
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")=== "submit") {
                alert("you clicked submit!");
            } 
        })
    }
    })
function endgame () {
    
}
document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("card");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", card);
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")=== "submit") {
                alert("you clicked submit!");
            } 
        })
    }
    })
    
function calculatewinner () {
    
}
document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("card");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", card);
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")=== "submit") {
                alert("you clicked submit!");
            } 
        })
    }
    })
function losegame () {
    
}

