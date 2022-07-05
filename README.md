# My version of the card game Blackjack. 

This version of Blackjack is designed for any and everyone who is feeling lucky and has some time to spare. My idea was to make a version of the game BlackJack to test your luck.  

## User Goals

- be able to casually spend some downtime testing a familiar or new game depending on the users previous experience
- The purpose of the user is to be able figure out how to play the game and beat the computer
- To be able to tell a good hand from a bad hand and making the descission on whether to take another card or stay
- return in the future when the game has more features


## Rules

The game is played out in the following way. You have an opponent which gives you cards(the house/dealer). The value of the cards are following: all numbered cards have their value displayed as normal(1 = 1 and so on). The suited cards (Jacks Queens and Kings) have the amount 10 and the Ace have either 11 or 1. 
The goal of the game is to get higher than the valued cards than the house. The highest valued hand is Blackjack with the value of 21. However if you get a higher hand than 22 you "bust" meaning you lose the hand. 

Enjoy!


## In Game Features

The game has 3 onload function that start without having to press any buttons. First it builds the deck and then it shuffles the deck and lastly it starts the game making it possible to press the buttons. 

The game has a hit button which will give the player a new card displayed under the dealer. this generates a number from the card and type arrays and then gives you a random card.

you are then given the option based on your cards if you want to stay. This button ends the round after that you cannot draw more cards. It displays the total sum of both dealer and player. It generates a message based on the values of each the dealer and the player as well such as "you win or you lose".

under the game area there is a restart button which reloads the page and restarts the entire game.

below the game area there are rules for those not familiar with the game.

![alt text](/assets/images/screenshot-blackjack.jpg)

### Technical features

- The website is responsive over several screen sizes. such as ipad with screen (1024px width), ipad portrait (768px width) and iphone (375 px width) and websites above 1024px

- The hit button generates a random card from the deck and cannot select the same card several times

- The stay button ends the round and generates a message based on the player and dealer score

- Favicon picture of a Ace of spades

### Languages used
- HTML5
- CSS3
- Javascript

## Features left to implement

A feature i was considering adding was a betting function. Which would keep track of your money and upon winning you would get more or lose you bettings on losing. 

Adding the double and split function that is in the original game would have been a nice addition also. 

Creating a toggle light switch for dark background and light background


## Testing

JS Hint returned reload funtion was unused on line 174 in the restart button function

CSS validator no issues where returned! 

CSS responsinator has been implemented

Jigsaw returned no issues!

Devtools returns no issue or errors in the console

### Further Testing 

- tested on chrome,safari and firefox
- getting additional input from friends


## Known bugs

- on some screen sizes the dealer card section gets pushed up so you cant see the dealer h2
- 

## Deployment

### Github pages

This project was deployed to github pages using these steps:

- Log in to GitHub and locate the GitHub Repository
- At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
- Scroll down the Settings page until you locate the "GitHub Pages" Section.
- Under "Source", click the dropdown called "None" and select "Master Branch".
- The page will automatically refresh.
- Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

## Credits: 

Defining deck influenced by : https://www.youtube.com/watch?v=oT49KkhOv-Y&t=11s

Huge credit to Kenny Yip for showing the know how to making this game. Code taken and inspired from: https://www.youtube.com/watch?v=bMYCWccL-3U&t=1384s
https://github.com/ImKennyYip/black-jack/blob/master/blackjack.js

Finding help making card games: https://www.youtube.com/watch?v=NxRwIZWjLtE


creating an array of cards to make the deck : https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript


adding the hit function : https://www.youtube.com/watch?v=AXB9oB5iGs4

Information taken from : W3schools.com on HTML,CSS and Javascript

# content 

## media

images cropped and taken from: 

Numbered cards:

card image link "https://www.google.com/search?q=full+card+deck+images&rlz=1C1CHBF_svSE976SE977&sxsrf=ALiCzsbyA15S9KxESExN_6OFdBBpb3_-kw:1651597068468&tbm=isch&source=iu&ictx=1&vet=1&fir=mQq5jsD93UU8PM%252CetLJpnFfrlBteM%252C_%253B9TuLlzOPh07LbM%252CWeT4BLRFbFB49M%252C_%253B4I4tsLXUNkZPrM%252CvjJ8GVxr9qtp6M%252C_%253BokVCHjrEI2r49M%252CbCmR3h4X_uocCM%252C_%253BQx4K2EN4aaNiHM%252CIH2m5Ps0xne62M%252C_%253BEvxHa9vKTSTCeM%252CWQBu45TBHS-_DM%252C_%253BgCPrFM3J0ip11M%252CXYerAoNohlLyvM%252C_%253BNDvTLxa1og5SrM%252CDJ0RRH3k82aSWM%252C_%253B3tL_KpuCwgF5eM%252ChhHC9DLRsrvFjM%252C_%253BEhR9eLZEeZ6htM%252CiIhHqJKwAF1czM%252C_%253BCOZHo0Z5efpxxM%252Cl-Qp6lvGOmXerM%252C_%253Bz5vU0JS66_NlAM%252CRQKoBq_Rpb7maM%252C_&usg=AI4_-kR0-KJWwiXhp6aKlPhMeWjB8RLG9A&sa=X&ved=2ahUKEwiSy8_E5sP3AhVNEncKHZ7OCuQQ9QF6BAgOEAE&biw=1536&bih=746&dpr=1.25#imgrc=EvxHa9vKTSTCeM"

Suited cards: https://www.google.com/search?q=full+card+deck+images&rlz=1C1CHBF_svSE976SE977&sxsrf=ALiCzsbyA15S9KxESExN_6OFdBBpb3_-kw:1651597068468&tbm=isch&source=iu&ictx=1&vet=1&fir=mQq5jsD93UU8PM%252CetLJpnFfrlBteM%252C_%253B9TuLlzOPh07LbM%252CWeT4BLRFbFB49M%252C_%253B4I4tsLXUNkZPrM%252CvjJ8GVxr9qtp6M%252C_%253BokVCHjrEI2r49M%252CbCmR3h4X_uocCM%252C_%253BQx4K2EN4aaNiHM%252CIH2m5Ps0xne62M%252C_%253BEvxHa9vKTSTCeM%252CWQBu45TBHS-_DM%252C_%253BgCPrFM3J0ip11M%252CXYerAoNohlLyvM%252C_%253BNDvTLxa1og5SrM%252CDJ0RRH3k82aSWM%252C_%253B3tL_KpuCwgF5eM%252ChhHC9DLRsrvFjM%252C_%253BEhR9eLZEeZ6htM%252CiIhHqJKwAF1czM%252C_%253BCOZHo0Z5efpxxM%252Cl-Qp6lvGOmXerM%252C_%253Bz5vU0JS66_NlAM%252CRQKoBq_Rpb7maM%252C_&usg=AI4_-kR0-KJWwiXhp6aKlPhMeWjB8RLG9A&sa=X&ved=2ahUKEwiSy8_E5sP3AhVNEncKHZ7OCuQQ9QF6BAgOEAE&biw=1536&bih=746&dpr=1.25#imgrc=mQq5jsD93UU8PM

backside displayed in the mainpage : https://www.google.com/search?q=card+deck+backside+image&rlz=1C1CHBF_svSE976SE977&sxsrf=ALiCzsbsdv-qSfwRZ0-CdQpbh-1nn4qELA:1652031157106&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwiVxJvSt9D3AhWBG80KHc6gAnQQ_AUoAXoECAEQAw&biw=1536&bih=746&dpr=1.25#imgrc=yRxpW16HekmFiM

## Acknowledgements

- My mentor Narender singh
- The tutor support on Code Intstitute
 