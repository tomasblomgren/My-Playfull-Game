/*defining deck of cards*/
const a = 1
const b = 2
const c = 3
const d = 4
const e = 5
const f = 6
const g = 7
const h = 8
const i = 9
const j = 10
let k = 11

/* adding Eventlisteners and DOM*/



document.addEventListener ("DOMContentLoaded", function (){
let buttons = document.getElementsByTagName ("button");
var content = document.getElementById("content");
var button = document.getElementById("rungame");
var startButton = document.getElementById("startgame");
startButton.addEventListener("click", rungame);

});

function rungame() {
console.log("gameshouldstart");    

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
console.log("divide full amount and no more cards allowed")    
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
        var button = document.getElementById("restartgame");
        var startButton = document.getElementById("resetgamearea");
        startButton.addEventListener("click", restartgame);
        
        });

    function restartgame () {
    console.log("resetsallactions");
    }



document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("card");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", card);
    
    });
function addround () {
    
}
document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("card");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", card);
    
    });
function endgame () {
    
}
document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("card");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", card);
    
    });
    
function calculatewinner () {
    
}
document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("card");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", card);
    
    });
function losegame () {
    
}
    
