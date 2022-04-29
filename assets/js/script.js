
/*defining deck of cards*/
class blackjack {


}


card = c;
card [0] = "A";
card [1] = "2";
card [2] = "3";
card [3] = "4";
card [4] = "5";
card [5] = "6";
card [6] = "7";
card [7] = "8";
card [8] = "9";
card [9] = "10";
card [10] = "J";
card [11] = "Q";
card [12] = "K";


/*defining game setup*/
class blackjack {


}


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
  // Creates a random number between 1 and 11
  
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
        var startButton = document.getElementById("randomisecards");
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
    console.log("resetallactions");
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
