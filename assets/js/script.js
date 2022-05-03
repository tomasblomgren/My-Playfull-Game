/*rendering deck */
function renderDeck(deck)
{
      document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++)
	{
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}
 

/*defining deck of cards*/
var suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]; 
var gameDeck = {};
/*Values and suits for each card*/
typeof (deck)
K = 10;
A = 10;
J = 10;
A = 1 && 11;
/*defining game setup*/
class blackjack {
    
}

function generateDeck(){
    gameDeck = getDeck();
}

function getDeck()
{
	let deck = new Array();

	for(let index = 0; index < suits.length; index++)
	{
		for(let valueindex = 0; valueindex < values.length; valueindex++)
		{
			let card = {Value: values[valueindex], Suit: suits[index]};
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
let buttons = document.getElementsByTagName("card");
generateDeck();
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
    

function showCard(card){
    const imagePath = './assets/images/'+ card.Suit + '/' + card.Value + '.png';
    const image = '<img src="' + imagePath + '" />';
    document.getElementById('deck').innerHTML += image;
    console.log(imagePath);
}

function card () {
  // Creates a random number between 1 and 11
  let num1 = Math.floor(Math.random() * 50) + 1;
  let num2 = Math.floor(Math.random() * 50) + 1; 
  let num3 = (num1 + num2) / 2;
  showCard(gameDeck[num1]);
  showCard(gameDeck[num2]);
};

document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content"); 
    var button = document.getElementById("split");
    var startButton = document.getElementById("divideamount");
    startButton.addEventListener("click", split);
    });


function split () {
console.log("dividetotalamountby2");    
}


document.addEventListener ("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName ("button");
    var content = document.getElementById("content");
    var button = document.getElementById("givepoint");
    var startButton = document.getElementById("hit");
    startButton.addEventListener("click", givepoint);
    });
/**
 * Gives points to either player and increments by 1
 */
    function givepoint () {
   /*
   *on endgame gives point
    */
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
            console.log("shufflecards")
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
   /*let oldscore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score-area").innerText = ++oldscore;*/ 
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
