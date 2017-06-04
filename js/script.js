// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//gets a random quote and color and prints it to the page
function printQuote(){
  var quote = getRandomQuote()
  var quoteString = "<p class = 'quote'>";
  quoteString += quote.quote;
  quoteString += "</p> <p class='source'>";
  quoteString += quote.source;

  if (typeof quote.citation != "undefined") {
    quoteString += "<span class='citation'>";
    quoteString += quote.citation;
    quoteString += " </span>";
  }
  if (typeof quote.year != "undefined") {
    quoteString += "<span class='year'>";
    quoteString += quote.year;
    quoteString += " </span>";
  }
  if (typeof quote.catagory != "undefined") {
    quoteString += "<span class='category'> ";
    quoteString += quote.catagory;
    quoteString += "</span>";
  }
  quoteString += "</p>";
  document.getElementById('quote-box').innerHTML = quoteString;
  document.getElementById('loadQuote').style.backgroundColor = color;
}

//returns a quote and color from the randomly sorted arrays
function getRandomQuote() {
  var quote = {}
if (counter == 0){
  shuffleArray(quotes);
  shuffleArray(colorArray);
  quote = quotes[counter];
  counter += 1;
  }else if (counter < quotes.length) {
    quote = quotes[counter];
    counter += 1;
  }else {
    counter = 0;
    quote = quotes[counter];
  }
  color = colorArray[counter];
  return quote;
}
  


//shuffles array randomly so that you dont get any repeats
function shuffleArray(array){
  var i = array.length;
  var j = 0;
  
  while(i--) {
    j = Math.floor(Math.random() * (i + 1));
    
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

//quote variables
var quoteOne = {
  quote: "I Destroy My Enemy When I Make Him My Friend",
  source: "Abraham Lincoln",
  catagory: "Political",

};

var quoteTwo = {
  quote: "In this world nothing can be said to be certain, except death and taxes.",
  source: "BENJAMIN FRANKLIN",
  citation: "Letter to Jean Baptiste Le Roy",
  catagory: "Political",
  year: 1789

};

var quoteThree = {
   quote: "One Good Thing About Music When It Hits You. You Feel No Pain.",
  source: "Bob Marley",
  citation: "Trenchtown Rock",
  catagory: "Music",
  year: 1971

};

var quoteFour = {
  quote: "We Believed That Anything That Was Worth Doing Was Worth Overdoing.",
  source: "Steven Tyler",
  year: 1990,
  catagory: "Music"
};

var quoteFive = {
  quote: "I'm Not A Woman. I'm A Force Of Nature.",
  source: "Courtney Love",
  catagory: "Music"
};

//empty variable to hold random color
var color = "";

var colorArray = ['red', 'green', 'blue', 'orange', 'yellow'];

//counter for picking quotes from array
var counter = 0;

var quotes = [quoteOne,quoteTwo,quoteThree,quoteFour,quoteFive];
//functions called when page loads to set up page
getRandomQuote();
printQuote();

//called to change quote if left for too long
setInterval('printQuote()', 10000);

