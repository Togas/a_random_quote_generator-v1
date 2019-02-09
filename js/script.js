/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
var quote1={ quote:"You have to do the best with what God gave you.", source:"Mrs. Gump", year:1994, citation:"Forrest Gump Movie"}
var quote2={ quote:"Adapt what is useful, reject what is useless, and add what is specifically your own.", source:"Bruce Lee"}
var quote3={ quote:"You can do anything, but not everything", source:"David Allen"}
var quote4={ quote:"One does not discover new lands without consenting to lose sight of the shore for a very long time.",
source:"André Gide"}
var quote5={ quote:"Deadlines are lifelines.", source:"Beth Lapides"}
var quote6={ quote:"Don't cry because it's over, smile because it happened.", source:"Dr. Seuss"}
var quote7={ quote:"Be yourself; everyone else is already taken.", source:"Oscar Wilde"}

var quotes=[quote1, quote2, quote3, quote4, quote5, quote6, quote7];




/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.