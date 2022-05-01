
/*defining deck of cards*/
/*class blackjack {
card new string[12];
suits = ["H", "S", "D", "C"];
}
*/

var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


/*defining game setup*/
class blackjack {


}
function getDeck()
{
	let deck = new Array();

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			let card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
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

        function shufflecards (deck)
        {
            // for 1000 turns
            // switch the values of two random cards
            for (let i = 0; i < 1000; i++)
            {
                let location1 = Math.floor((Math.random() * deck.length));
                let location2 = Math.floor((Math.random() * deck.length));
                let tmp = deck[location1];
        
                deck[location1] = deck[location2];
                deck[location2] = tmp;
            }
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
