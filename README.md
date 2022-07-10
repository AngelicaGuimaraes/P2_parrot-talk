# Parrot Talk

![Responsive screenshot](/assets/images/screencapture-responsive.png)

# The purpose with this project

Parrot Talk is a quiz game with the purpose of challenging the player to get the most number of right questions out of it, while learning about some curious facts about Brazil. The user interface is kept simple, clean and easy for the player to follow the quiz without having to pay attention to instructions. The questions were chosen in a way so the players will find some of them easy and others not so much, so that instigates the feeling of challenging themselves.

The game has three screens: Start, Game, End.

Target audience: All individuals that want to have fun, take a challenge and learn a bit more about Brazil.

The site has been created for the second milestone project for Code Institute's Diploma in Full Stack Software Development program.

Required technologies are HTML5, CSS3 and JavaScript.

A live version of the project can be found here - https://angelicaguimaraes.github.io/parrot-talk/

# Table of Content

+ [UX](#ux "UX")
  + [User Demographic](#user-demographic "User Demographic")
  + [User Stories](#user-stories "User Stories")
    + [New Players](#new-players "New Players")
    + [Old Players](#old-players "Old Players")
  + [Player Goals](#player-goals "Player")
  + [Project Requirements](#project-requirements "Project Requirements")
  + [Design](#design "Design")
    + [Design Discovery Phase](#design-discovery-phase "Design Discovery Phase")
    + [Colours](#colours "Colours")
    + [Typography](#typography "Typography")
    + [Images](#images "Images")
+ [Features](#features "Features")
  + [Existing Features](#existing-features "Existing Features")
    + [Start Screen](#start-screen "Start Screen")
    + [Game Screen](#game-screen "Game Screen")
    + [End Screen](#end-screen "End Screen")
  + [Features Left to Implement](#features-left-to-implement "Features Left to Implement")
+ [Technologies used](#technologies-used "Technologies used")
+ [Testing](#testing "Testing")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
+ [Development and Deployment](#development-and-deployment "Development and Deployment")
+ [Content](#content "Content")
+ [Media](#media "Media")
+ [Credits](#credits "Credits")

## UX

### User Demographic

This game is ment for:

 - All individuals, regarding age, that want to challenge themselves with a cultural and fun quiz.

### User Stories

The user stories between new and old players differ just slightly since it is a simple game.

#### New players

 - I want to try a new quiz.
 - I want to have fun while playing an interesting quiz.
 - I want to learn new curiosities about Brazil.
 - I want to increase the number of right answers every time I play it.
 - I want to get all 10 questions right.

#### Old players

 - I want to increase the number of my right answers compared to last time I played it.
 - I want to challenge myself by knowing, by heart, the information about the questions.
 - I want to get all 10 questions right.

### Player goals

 - To get all 10 anwers right.

### Project Requirements

 - To build an interactive front-end site that responds to user actions. The user should engage actively by altering data and how the site displays. The development process needs to be well documented through a version controls system such as GitHub and contain HTML5, CSS3 and JavaScript.

### Design

The design was decided to bring the users into a fun space, where they could feel a bit of the Brazilian atmosphere. 
It was also decided to keep it as minimalistic as possible with the purpose of minimizing player's distractions.

#### Design Discovery Phase

Canva was used as a tool during brainstorming phase. Some color palettes were tested before the final choice was made but they were chosen based on the parrot logo. Happy and friendly were two keywords used to determine the final design suggestion.

The game consists of three screens. Start, Game and End. The final version of the wireframe and design are presented below this text.

Start Screen

![Start Screen](/assets/images/screencapture-start-quiz.png)

Game Screen

![Game Screen 1](/assets/images/screencapture-game-screen1.png)
![Game Screen 2](/assets/images/screencapture-game-screen2.png)

End Screen

![End Screen](/assets/images/screencapture-end-quiz-page.png)

#### Colours

The colour palette was created using [Coolors](https://coolors.co/).

![Colour Palette](/assets/images/parrot-talk-color-palette1.png)

#### Typography

Fonts chosen for the project were [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue?query=bebas) and [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open).

#### Images

The logo image was taken from [Flaticon](https://www.flaticon.com/free-icons/parrot).
The image on top of this ReadMe was created using [Am I Responsive](http://ami.responsivedesign.is/).

[Back to top](#parrot-talk)

## Features 

Parrot Talk consists of three game screens:

 - Start Screen
 - Game Screen
 - End Screen

Parrot Talk is a linear game and when the player presses start, the game board is created and shuffled. The player ends up at the end screen with the option of finishing the quiz or restarting it.

### Existing Features

#### Start Screen

The Start Screen consists of the logo of the quiz, and a paragraph. Other elements are:

 - Start button that takes the player to the game screen.

![Start Screen](/assets/images/screencapture-start-quiz.png)

#### Game Screen

The Game Screen contains:

 - Parrot Talk Logo.
 - The question paragraph.
 - Four buttons with the different answer options.
 - The section containing the number of correct and wrong answers.
 - A greeting saying if the player chose the right answer or not.
 - A paragraph containing some information about the right answer that apears when the player clicks the chosen answer button.
 - The next question button that takes the player to the next shuffled question available until it reaches the last question of the list.

![Game Screen 1](/assets/images/screencapture-game-screen1.png)
![Game Screen 2](/assets/images/screencapture-game-screen2.png)

#### End Screen

Parrot Talk quiz is a linear game and all players end up at the end screen either to finish it or restart it. Messages differ depending on how many points the player did. The end screen displays:

 - The Parrot Talk logo.
 - Paragraph telling the players how many points they made.
 - Restart Quiz button that generates a new game with the same 10 questions shuffled on a different order.
 - Finish button that takes the player to the start screen.

![About us Section part 1](/assets/images/screencapture-end-quiz-page.png)

### Features Left to Implement

- Different game levels.

[Back to top](#parrot-talk)

## Technologies used

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/javascript)

## Testing 

- Initial testing showed that the function I used to create the game cards did not get the correct information from my main game array. The cards was not generated properly. I struggled a lot with this and made several attempts to change the information in the array but nothing seemed to work.

  - The solution to this problem was simpler than I first expected. My Array contains the class names of 10 different FontAwesome icons and my function did not generate any inner HTML in the DIV-tags that are the cards. After a change in the function so that it adds a i-tag with a class attribute from the array solved the issue.

- Game Card not responding to clicks.

  - My event listener was not correct and placed outside the function that generates the cards.

- Console log constantly gave an error due ot missing favicon. I figured that this is either connected to the Code Institute template or to GitPod. 

  - I added the favicon from ”Love Maths” and that removed the error. Later I updated with my own favicon.

- Selected cards do not change colour upon clicks

  - I was not able to correctly identify the correct card (div) and it’s inner HTML. The solution was to get the ID of the selected DIV-tag and change the attribute color using this.getAttribute.

- Game cards did not compare correctly. All cards are considered to be a match.

  - When comparing 0 and 1 in the Array with selected cards all were a match. It took me some time to figure out why. After a console.log I noticed that the value of both cards were set to Object. I tried to convert the entries in the Array to strings and strings became identical as well HTMLObject. I resorted to W3 Schools and found an attribute called data- that could be applied with almost any value. I had to go back to the function that generates the board and added the attribute data-id with the same value as the class name of the icons. This value was then pushed in the array of selected cards and the matchmaking worked.

- Upon restart of the game from the End screen or the scenario End Screen - Quit - Start. The game board consisted of 40 cards instead of 20. For each try it added a new set of cards.

  - I wrote a function that clears all inner HTML for the DIV that is the main game board and called that function upon restart and quit.

- The game card are not re-shuffeling when you press Play Again.

  - The line of code that shuffles and creates the variable cardDeck was not placed inside the function that generates the board. When it was moved there the bug was fixed.

- The End Screen flickers when the timer reaches 100.

  - A loop was created due to badly placed console.log and the fact that the timer restarted in the background. Added a stop to the timer at won game and removed the console.log

- If a player wins a game, plays again and looses the messages is still that one of a win.
  - Made a function that restores the message and cal the function from the Quit and Play again button.

This list contains the major bugs. There has been several smaller ones connected to misspelled syntaxt and such that has been solved in under 1-2 minutes.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpelikantapeten.github.io%2Fp2-quickmem%2F)

![W3C HTML Validator](/assets/images/readme-images/html-validator.png)

- CSS
  - No errors were returned when passing through the official [(Jigsaw validator)](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fpelikantapeten.github.io%2Fp2-quickmem%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

  - CSS validation passes with no errors but contains a warning. The warning indicates that the background colour and font colour of the class ”memory-card” are the same. This is on purpose since the game function to check memory cards depend on colour change. 

![Jigsaw validator](/assets/images/readme-images/css-validator.png)

- JavaScript
  - No errors or warnings was returned using [(JSHint)](https://jshint.com/) with "New JavaScript features (ES6)" activated in the configuration.

![JSHint](/assets/images/readme-images/jshint-screen.png)

- Lighthouse testing

![Lighthouse testing score](/assets/images/readme-images/lighthouse.png)

### Unfixed Bugs

- Some test players have experienced that card values get "stuck" if you are playing the game to fast. This requires further investigation.

- On screens with a resolution in height of 290px or less the face value (icons) are visible even if a card is not turned.

 [Back to top](#parrot-talk)

## Development and Deployment

The development environment used for this project was GitPod. To track the development stage and handle version control regular commits and pushes to GitHub has been conducted. The GitPod environment was created using a template provided by Code Institute.

The live version of the project is deployed at GitHub pages.

The procedure for deployment followed the "Creating your site" steps provided in [GitHub Docs.](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

1. Log into GitHub.
2. Locate the GitHub Repository that shall be deployed live.
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the ”GitHub Pages" section and click on the ”Check it out here!”
5. At the ”Source” section choose ”main” as Branch and root as folder and click ”Save”
6. The website will deploy and the pages refreshes to provide the live link to the project.

The live link can be found here - https://angelicaguimaraes.github.io/parrot-talk/

## Content 

- All text content in this game has been produced by the author.

## Media

Apart from Google Fonts and Flaticon no external media are used in the game.

## Credits 

### For code inspiration, design inputs, help and advice.

I have consulted numerous websites, individuals and slack channels to get support for the code. No code block is directly copied but some generates from information I gathered from other developers and sites:

 - [Mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for information about Arrays and also identifying bugs.
 - [Code Institute - Love Running](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode) for inspiration to game footer.
 - [Code Institute - Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) for inspiration to design of user interface.
 - [DevelopedByEd](https://developedbyed.com/) that taught me in his vides on how to generate a board of cards and display it as a CSS grid.
 - [W3 Schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) for understanding Event Listeners. 
 - [W3 Schools](https://www.w3schools.com/w3css/w3css_progressbar.asp) for the developing of my progress bar on the main game screen.

### Acknowledgment

 - [Martina Terlevic](https://www.linkedin.com/in/martinaterlevic/) My fantastic mentor at Code Institute, thank you for your support, feedback and humor.

 And to all the rest of my fellow student that have tested the actual game and provided me with feedback on playability.


[Back to top](#parrot-talk)
