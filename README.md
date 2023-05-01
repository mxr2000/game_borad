# COMP6080 Final Exam

For this exam you are provided with this public repostory (`exam-spec`) that all students have access to. This repository contains the questions being asked. You will then also have your own [personal exam repository](https://cgi.cse.unsw.edu.au/~cs1531/redirect/?path=COMP6080/23T1/students/_/exam) where you actually complete the work that will be submitted. The personal exam repo is where you actually commit and push your code.

If you are seeking information not provided in this file, check the [COMP6080 Exam Brief page](https://cgi.cse.unsw.edu.au/~cs6080/23T1/assessments/exam). If your question is still unanswered, follow the "Communicating with teaching staff" instructions.

## WARNING

This applies to all students completing the COMP6080 23T1 exam.

* This exam is an individual assessment. Any attempt to communicate with other people (both other students in this course and outside persons) about the contents of this exam will be treated as academic misconduct and may result in you failing this course. This applies to everyone during the exam time, as well as any communication between the end of your exam and Wednesday the 12th of May at 1pm. To avoid any doubt about your behaviour during the exam, cease all communication with other students for that time.
* From the end of the scheduled exam time onward, you are only allowed to discuss the exam with students who have themselves also completed the exam, and it's your responsibility to check if they have.
* Your zpass should not be disclosed to any other person. If you have disclosed your zpass, you should change it immediately.
* Do not place your exam work in any location accessible to any other person. This includes services such as Dropbox and Github.
* If another student in the course makes any sort of contact with you during the exam, or you’re aware of any instances of other students breaching the conditions above, you are required to email cs6080@cse.unsw.edu.au with details of the interaction.

## Change Log

## 1. The Exam

### 1.1 Overview

You are to build a small single page application (with either ReactJS or Vanilla JS) that has three basic interactive games, along with a dashboard acting as a homepage.

### 1.2. Getting Started

Please clone your [personal exam repository](https://cgi.cse.unsw.edu.au/~cs6080/redirect/?path=COMP6080/23T1/students/_/exam).

Run `yarn install` to install all relevant dependencies to start.

Run `yarn start` to start your ReactJS app. Please note, if you are using a version of NodeJS 18 or above, you will need to run the command `export NODE_OPTIONS=--openssl-legacy-provider` in terminal first.

You are welcome to install any dependencies on top of ReactJS that you would like using `yarn add [dependency]`.

Please note: If you prefer to complete the exam with VanillaJS, then you can simply remove all files we've provided and start from an empty repo.

There is no backend in this application. The entire state you manage should be done in localstorage or another form of persistent browser storage.

The numbers in brackets next to any items (e.g. "Make the page big (1)") describe the number of marks associated with that piece of functionality.

HINTS: The "Word Colour" game is easy. The "Frogger" game is easier if you're comfortable with timers and keyboard commands. The "Findaword" game is easier if you like data structures and puzzles.

#### 1.2.0. Document, sidebar, and Footer (10 marks)

* The overall document/page should have a `margin` of `2px`. (0.5)
* All screens shall have a left sidebar bar that is:
    * `80px` wide. (0.5)
    * Has a height that spans the full height of the viewport. (0.5)
    * Has property `position: fixed` such that no matter where the user scrolls the sidebar is visible. (0.5)
    * Has a background colour of `rgb(200,200,220)`. (0.5)
    * Contains a logo (choose any image from the internet) that:
        * At the top of the nav bar, centre aligned. (0.5)
        * Has a margin of `8px` on top and bottom. (0.5)
        * Has a size `54px` x `54px`. (0.5)
    * Contains 4 lines of text that are links: (1)
        * Home (linking to /home)
        * Word Colour (linking to /wordcolour)
        * Frogger (linking to /frogger)
        * Find-a-word (linking to /findaword)
    * If the screen width drops below `1400px`, then:
        * The linktext, instead of "Home", "Word Colour", "Find-a-word", "Frogger" becomes "H", "W", "Fi", "Fr" (0.5)
        * The linktext font size drops to `0.7em` (0.5)
        * The width of the side bar drops to `60px` and logo shrinks accordingly (0.5)
    * If the screen width drops below `800px`, then:
        * The linktext, instead of "Home", "Word Colour", "Find-a-word", "Frogger" becomes "H", "W", "Fi", "Fr" (0.5)
        * The linktext font size drops to `0.7em` (0.5)
        * The width of the side bar drops to `30px` and logo shrinks accordingly (0.5)
        * The logo disappears (0.5)
* All screens shall have a footer bar that:
    * Has a height of 60px. (0.5)
    * Has a width that spans the full width of the viewport, minus the sidebar. (0.5)
    * Has a background colour of `#333` (0.5)
    * Contains your full name in centre aligned text in `#fff` font. (0.5)
* The entirety of the space on the page that isn't used by the sidebar and footer is referred to as the `main body`, and screens from `1.2.1`, `1.2.2`, `1.2.3`, and `1.2.4` should occupy that full space, unless otherwise specified.

#### 1.2.1. Dashboard (9 marks)

* This screen exists on route `/home` and contains the sidebar and footer from `1.2.0`. (0.5)

* This screen shall contain two lines of text that are center aligned:
    * The first line is the content `Wins to achieve: X (reset)`. (0.5)
        * `X` should be initially set as the number found in the JSON object (format `{"score":5}`) at this URL: [https://cgi.cse.unsw.edu.au/~cs6080/raw/data/score.json](https://cgi.cse.unsw.edu.au/~cs6080/raw/data/score.json). (2)
        * Each time the player wins any of the 3 games, this number should go down. (1)
        * The value of `X` shall persist between loads by making use of a form of browser storage (e.g. `localstorage`). (2)
        * Once the value reaches 0, an alert is shown saying 'Congratulations!' and the value is reset to the original value. (1)
        * When `(reset)` (a button) is clicked, the counter `X` will be reset to the original value. (1)
    * The second line is the text `Let's go!.` The text is colour `red` and font size `4em`. (1)

#### 1.2.2. Game 1 - Word Colour (20 marks)

* This page exists on route `/wordcolour` and contains the relevant components from `1.2.0`. (0.5)
* This page will display two key areas that occupy 50% of the remaining screen space each. (1)
    * The left section will be background `#ccc` and the right section will have default colour `#999` (1)
        * The left section will also contain some text that is vertically and horizontally centered, of font size `2em`. (1)
        * The text area is initially hidden before the game begins (1).
    * The right section will be further broken up into 4 different equally sized rectangles that take up the space equally. (2)
        * This will be initially hidden. (1)
* 2 seconds after the page loads, the game begins and follows a series of steps:
    * On the left hand side, a random selection from the following pieces of text populates it. This text is one of the following colours: `red`, `blue`, `orange`, `yellow`, `green`, `purple`, `pink`. (2)
    * On the right hand side, the four quadrants are displayed each with a random background colour. (1)
        * One and only one of the background colours matches the coloured described by the text on the left. (1)
    * The game then waits for the user to select one of the coloured squares. If they click the wrong coloured square nothing happens. If they click the correct coloured square the game refreshes the text and colours for another round. (4)
    * The game repeats for 3 different colours (i.e. 3 different correct answers). At this point the players "wins" (2.5).
    * When the player "wins" an alert comes up saying "You have won" and then the game reset. (2)

[A short video demonstration of this game can be found here](https://www.youtube.com/watch?v=jtqSyEhW3pY). Please note - do not copy what you see in this video. There are parts of this video that may not comply with the specification. This is purely here to give you a very general sense of the behaviour in case you are struggling to visualise it.

#### 1.2.3. Game 2 - Frogger (17 marks)

This page is a simplified implementation of the game [frogger](https://happyhopper.org/).

* This screen exists on route `/frogger` and contains the sidebar and footer from `1.2.0`. (0.5)
* The base 64 encoded image code for the frog and car icons are below.

* This screen shall consists of a large grid of `11` by `11`: (1)
    * Each cell shall be approximately 1/11th (0.09%) of the remaining space's width and height. (1)
    * Rows 2-10 (i.e. excluding top and bottom row) consist of either empty cells or car icons.
        * In rows 2, 5, and 8, the car start in columns 1, 5, 9 (1)
        * In rows 3, 6, and 9, the car start in columns 2, 6, 10 (1)
        * In rows 4, 7, and 10, the car start in columns 3, 7, 11 (1)
    * The bottom row only ever has the frog in the middle cell (6th cell from the left) during the start of the game.
    * The top row only ever has the frog in any of the cells when it makes its way to the top. (1)
* When the game starts:
    * Every 1 second, every car moves one space to the left. (4)
    * If a car has no space to move to the left, it should wrap around to the right hand side. (2.5)
    * Every time a user keys an arrow key on the keyboard (up, down, left, right), the frog should move one space in that direction. The frog cannot overflow, so if it's against a wall it cannot continue more in that direction. (3)
    * Once the frog lands in the top row the player wins the game and they are notified of their win with an alert. (1)

```html
<!-- Frog -->
<img src="data:image/png;base64,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">
```

```html
<!-- Car -->
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJUlEQVR4nO2W709TVxjHq2/8B5zGd/Ol7bBskMyozJ4bjLplmW+GWnTZkrHAdJEXmgwhc6AI2UQjP6IRFuGe2y3bpCQuMSTTF8QfGSKogHUWXFZk7dbbH/eWFbI24zHntr3c3h8VWloac5/km5Pbmz7n+dzz/DgGg2666aabbrq9xErwvxsQ5roomnNTmAN1BdXFBDTk15DPjRi2swR7NxiWw7Z/F3qNwvwEhXmIKesAQISwz7nDFlqbMQDCfDMJ/J3LLLx18imYax6D+URMm2UqEDSepDdq5RoDk0zGhOrGoKDhMZR0umMgmD2TMQBF838SgKKGSTDXOLIOYKwbBXPj77FTYFhXRsHvpIMbSfCW7iAUCsHHAL5os8PYr4chPFgmrIdb7QqA+qYvYbJjnaCvm2oUAJ+3XYXRGzEfZK1q6xUBTHWjYOnxChA7fgi+njYAovlPCMD2jr/jwTvgSGsv/D/0vkJH238SAcrre4C7tEpU8OJqsDbQIkBV28+qPo50/CgAEG29NJ2oh48zAOC6CcCWb6dEgNH+TyH62y6FHvZXiACNzceSAIhONR8XAR5p+HjQXyECFJ/7I17M7JXM879+QgQIDOyB/+4ghcjvCQBrPa1yAlgESOXDGAcoOO3IrA6k+f+mmP8OePCLFeYGtik0fO2grAZq4Fn7epjsWA8nm04k1cCIho/71w6KAMbF1gHC3F2xjzMBQIx/Gtm870rzf6GAHVDVYoPwzSKFKs99v+gu9Nl5RtVHxXmbGPwmWR1YMP8eorm/FmaLn7TZ24aF4SR5wbDPpfkvBSBdqPIshntXPwDv9SJhrWzBS26jFS00DMZ9kJU8J7pQAkBaBwhz08o4fUDy/LnaC2n+ywGyPQeMcQBpHah9aKE+KIbfg2huSgGAeUDx/F8pAKOkDuQAiPG5LDb/LmVNdM+YEA6FF+4+cuXmLkQpxM4h+h9zys6z+wKsoTA/TuEQ5CEAUNg7vvu6c40mAIX56ljweQrACBBHUwCEhvIdAGHvoDYAzc9KAax9MzDiicJcdB6GPVE4YJ/JOoC1LwAjnkh8zwgc6AskAzBsONUJgBSABC+1YXc06wAjnkjynp5IcgoxLCwaYDY6n+QsHJnPOsCs2p7pApAvLrWhHJzAsOwEhtwZnMB++4wQNPkKZN3Xm/0a2N8XEIKO7RmBffZA+gAv60JFDYlrdvJklk5ktQksnbqbTz9ZWhtdToBtre6MAba0T60cAOoJQmHtk7QBTF+NAaJ9KwdA9PY3rrQBis8+W/okXm4AyxU/FJ+aAHPt4gFMdeNQeMYJlh525QFyfhdiXmWA0k5X3gOUdjm1AfZWN0PpZVfeApR2OWFvdaM2QFn5R5BKhhxZWbpx6AB5cAK3tP70YfmhgRwC3MqHOHTTTTdD9u0FUpjqOG1LwVQAAAAASUVORK5CYII=">
```

[A short video demonstration of this game can be found here](https://www.youtube.com/watch?v=ZdVn8e8zvno). Please note - do not copy what you see in this video. There are parts of this video that may not comply with the specification. This is purely here to give you a very general sense of the behaviour in case you are struggling to visualise it.

#### 1.2.4. Game 3 - Find-a-word (20 marks)

This game is loosely based off of the [find-a-word game](https://www.superteacherworksheets.com/images/preview/gen_wordsearch001.jpg).

* This screen exists on route `/findaword` and contains the sidebar and footer from `1.2.0`. (0.5)

* This screen shall consists of two main components:
    * The board/grid, which is a `300px` by `300px` space in the middle of the screen (vertically and horizontally aligned). (1)
        * Each letter in the grid takes up a space `75px` by `75px` in size, contains no border, and has a slight grey background `#ccc`. (1)
        * The letter within it's cell should be capitalised and vertically/horizontally centre aligned, as well as bold. (1)
    * The list of words, which is contained in the space immediately below the board/grid, has a width of `100px`, and can take up the remainder of the vertical height of the screen. (1)
        * Each word in the list of words has font size `1.2em` and has line-height of `150%`. (0.5)
* When the game starts, the board is populated randomly with one of 3 sets of data from the data structures (see below). The list of words are also listed immediately below the table on one line each. Note: The words can cross over each other. (4)
    * When the user clicks on a cell, it should highlight the cell `rgb(255,255,200)`. When they click on a highlighted cell, it should reduce to `#ccc` (3).
    * If the user has clicked (turned yellow) all of the specific cells that make up a particular word, the word itself in the word list at the bottom is given a bold font-weight. (4)
    * If they try and click on more cells than there are letters in the grid that make up the words, nothing should happen on click (this basically means that the number of cells they can turn yellow is the absolute minimum number of cells they need to win). (2)
* The player wins when they have highlighted all of the cells that are part of the words, and made sure any cells that do not form part of any words are not highlighted. When the player "wins" an alert comes up saying "You have won" and then the game reset. (2)

The data used for the game can be found below. It is a multi layered object where the "grid" (board) is represented as a 2D array. Each item in the 2D array consists of a letter, and then an array of indexes that refer to the particular word. For for instance in the first grid, `['F', [0,1]]` means that `F` is part of `words[0]` and `words[1]` which is `feed` and `farm`.

```javascript
const wordlist = [
	{
		words: ['feed','farm','eat','rat'],
		grid: [
			[['F',[0,1] ],['E',[0]],['E',[0,2] ],['D',[0] ]],
			[['A',[1] ],['Z',[]],['A',[2] ],['D',[] ]],
			[['R',[1,3] ],['A',[3]],['T',[2,3] ],['D',[] ]],
			[['M',[1] ],['G',[]],['R',[]],['D',[] ]],
		]
	},
	{
		words: ['monk','near','eel','more'],
		grid: [
			[['M',[0] ],['O',[0]],['N',[0,1]],['K',[0]]],
			[['C',[] ],['E',[2]],['E',[1,2]],['L',[2]]],
			[['B',[] ],['K',[]],['A',[1]],['L',[]]],
			[['M',[3] ],['O',[3]],['R',[1,3]],['E',[3]]],
		]
	},
	{
		words: ['firm','ramp','damp'],
		grid: [
			[['F',[0] ],['I',[0]],['R',[0,1]],['M',[0]]],
			[['B',[] ],['F',[]],['A',[1]],['O',[]]],
			[['D',[2] ],['A',[2]],['M',[1,2]],['P',[2]]],
			[['E',[] ],['R',[]],['P',[1]],['T',[]]],
		]
	}
]
```

[A short video demonstration of this game can be found here](https://www.youtube.com/watch?v=qUtWPx67Omk). Please note - do not copy what you see in this video. There are parts of this video that may not comply with the specification. This is purely here to give you a very general sense of the behaviour in case you are struggling to visualise it.

### 1.3. Other notes

* If we don't specify a constraint, then you have discretion as to what to do, assuming it still ensures that your application is usable and accessible.
* If a CSS property constraint is not specified (e.g. font size) then you are free to use whatever is reasonable and usable.
* While we don't specify many requirements around usability and accessibility, you should take initiative to make your work both usable and accessible to gain the marks in that area.
* You should ensure that your programs have been tested on one of the following two browsers:
    * Locally, Google Chrome
    * On CSE machines, Chromium

## 2. Marking Criteria

For each of sections, marks will be awarded according to the following criteria:
* 80%: Providing the features and functionality required at least one of desktop, tablet, or mobile.
* 20%: Ensuring responsiveness on desktop, tablet, mobile
    * Desktop testing will be done on a `1800px` x `800px` viewport size
    * Tablet testing will be done on a `1200px` x `500px` viewport size
    * Mobile testing will be done on a `600px` x `500px` viewport size

## 3. Submission

At the end of your specified exam time, we will automatically collect the code on your `master` branch's HEAD (i.e. latest commit).

Please note: If you develop locally ensure you check that your code works on the CSE servers. Failure to do so could result in a fail mark in the exam.

## 4. Originality of Work

The work you submit must be your own work. Submission of work partially or completely derived from any other person or jointly written with any other person is not permitted.

The penalties for such an offence may include negative marks, automatic failure of the course and possibly other academic discipline. Assignment submissions will be examined both automatically and manually for such submissions.

Relevant scholarship authorities will be informed if students holding scholarships are involved in an incident of plagiarism or other misconduct.

Do not provide or show your assignment work to any other person — apart from the teaching staff of COMP6080.

If you knowingly provide or show your assignment work to another person for any reason, and work derived from it is submitted, you may be penalized, even if the work was submitted without your knowledge or consent.  This may apply even if your work is submitted by a third party unknown to you.

Note you will not be penalized if your work has the potential to be taken without your consent or
knowledge.
