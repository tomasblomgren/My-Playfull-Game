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

var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
/*Values and suits for each card */
var deck = [{Value: 'A', Suit: 'Spades'}, {Value: 'A', Suit: 'Diamonds'}, {Value: 'A', Suit: 'Clubs'}, {Value: 'A', Suit: 'Hearts'}, { Value: '2', Suit: 'Spades'},{ Value: '2', Suit: 'Diamonds'},{ Value: '2', Suit: 'Clubs'},{ Value: '2', Suit: 'Hearts'},{ Value: '3', Suit: 'Spades'},{ Value: '3', Suit: 'Diamonds'},{ Value: '3', Suit: 'Clubs'},{ Value: '4', Suit: 'Hearts'},{ Value: '5', Suit: 'Spades'},{ Value: '5', Suit: 'Diamonds'},{ Value: '5', Suit: 'Clubs'},{ Value: '5', Suit: 'Hearts'},{ Value: '6', Suit: 'Spades'},{ Value: '6', Suit: 'Diamonds'},{ Value: '6', Suit: 'Clubs'},{ Value: '6', Suit: 'Hearts'},{ Value: '7', Suit: 'Spades'},{ Value: '7', Suit: 'Diamonds'},{ Value: '7', Suit: 'Clubs'},{ Value: '7', Suit: 'Hearts'},{ Value: '8', Suit: 'Spades'},{ Value: '8', Suit: 'Diamonds'},{ Value: '8', Suit: 'Clubs'},{ Value: '8', Suit: 'Hearts'},{ Value: '9', Suit: 'Spades'},{ Value: '9', Suit: 'Diamonds'},{ Value: '9', Suit: 'Clubs'},{ Value: '9', Suit: 'Hearts'},{ Value: '10', Suit: 'Spades'},{ Value: '10', Suit: 'Diamonds'},{ Value: '10', Suit: 'Clubs'},{ Value: '10', Suit: 'Hearts'},{ Value: 'J', Suit: 'Spades'},{ Value: 'J', Suit: 'Diamonds'},{ Value: 'J', Suit: 'Clubs'},{ Value: 'J', Suit: 'Hearts'},{ Value: 'Q', Suit: 'Spades'},{ Value: 'Q', Suit: 'Diamonds'},{ Value: 'Q', Suit: 'Clubs'},{ Value: 'Q', Suit: 'Hearts'},{ Value: 'K', Suit: 'Spades'},{ Value: 'K', Suit: 'Diamonds'},{ Value: 'K', Suit: 'Clubs'},{ Value: 'K', Suit: 'Hearts'},]

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
    

function card (deck) {
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
