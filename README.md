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

![Game Screen 1](/assets/images/screencapture-game-screen.png)
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

![Game Screen 1](/assets/images/screencapture-game-screen.png)
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

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fangelicaguimaraes.github.io%2Fparrot-talk%2F)

![W3C HTML Validator](/assets/images/HTML-validator.png)

- CSS
  - No errors were returned when passing through the official [(Jigsaw validator)](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fangelicaguimaraes.github.io%2Fparrot-talk%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![Jigsaw validator](/assets/images/CSS-validator.png)

- JavaScript
  - Minor error were returned using [(JSHint)](https://jshint.com/) with "New JavaScript features (ES6)" activated in the configuration.

![JSHint](/assets/images/JSHint-validator.png)

- Lighthouse testing

![Lighthouse testing score](/assets/images/screencapture-Lighthouse.png)

### Unfixed Bugs

- Last question on the quiz always returns as "right" to the player.

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

- All questions and answers in this quiz have been taken from [Fun Trivia](https://www.funtrivia.com/en/Geography/Brazil-8275.html).

## Media

Apart from Google Fonts and Flaticon no external media were used in the game.

## Credits 

### For code inspiration, design inputs, help and advice.

I have consulted various websites, youtube channels, and slack channels to get inspiration for the code to build the quiz. Some code blocks were copied from other projects that I have gathered from other developers and sites:

 - [Mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 - [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified) 
 - [Web Dev Simplified](https://www.youtube.com/watch?v=y17RuWkWdn8&t=169s&ab_channel=WebDevSimplified)
 - [W3 Schools](https://www.w3schools.com/js/js_functions.asp) 
 - [W3 Schools](https://www.w3schools.com/js/js_array_iteration.asp)
 - [Frankie Sanjana](https://frankiesanjana.github.io/women-in-STEM-quiz/)

### Acknowledgment

 Martina Terlevic
 - My great mentor at Code Institute: Thank you for your help and patience during this project!
 
 Mats Simonsson
 - Friend and Mentor: Thank you for all your support, help, time and for the amazing suggestions to make this project look even better!


[Back to top](#parrot-talk)
