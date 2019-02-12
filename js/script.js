/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
declare and initialize quotes and put it into an array 
***/
var quote1={ quote:"You have to do the best with what God gave you.", source:"Mrs. Gump", year:1994, citation:"Forrest Gump Movie"}
var quote2={ quote:"Adapt what is useful, reject what is useless, and add what is specifically your own.", source:"Bruce Lee"}
var quote3={ quote:"You can do anything, but not everything", source:"David Allen"}
var quote4={ quote:"One does not discover new lands without consenting to lose sight of the shore for a very long time.",
source:"André Gide"}
var quote5={ quote:"Deadlines are lifelines.", source:"Beth Lapides"}
var quote6={ quote:"Don't cry because it's over, smile because it happened.", source:"Dr. Seuss"}
var quote7={ quote:"Be yourself; everyone else is already taken.", source:"Oscar Wilde"}
var quote8={ quote:"You shouldn’t focus on why you can’t do something, which is what most people do. You should focus on why perhaps, you could be one of the exceptions", source:"Steve Case"}

var quotes=[quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8];




/***
  returns a random quote
***/

function getRandomQuote(){
  var randomNumber=Math.floor((Math.random()*quotes.length));
  return quotes[randomNumber];
}
getRandomQuote();




/***
  prints a random quote with quote and source and if available also the citation and year
***/

function printQuote(){
  var randomQuote =getRandomQuote();
  document.querySelector(".quote").innerHTML=randomQuote.quote;
  document.querySelector(".source").innerHTML=randomQuote.source;
  
  if(randomQuote.citation){
    var span = document.createElement("span");
    span.className="citation";
    document.querySelector(".source").appendChild(span);
    document.querySelector(".citation").innerHTML=randomQuote.citation;
  }
  if(randomQuote.year){
    var span = document.createElement("span");
    span.className="year";
    document.querySelector(".source").appendChild(span);
    document.querySelector(".year").innerHTML=randomQuote.year;
  }
}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.