/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
quotes =[
  {
    quote: "Oh yes, the past can hurt. But you can either run from it, or learn from it.",
    source: "Rafiki",
    citation: "The Lion King",
    year: "1994"
  }, 
  {
    quote: "Do, or do not. There is no \'try\'.",
    source: "Yoda",
    citation: "The Empire Strikes Back",
    year: "1980"
  }, 
  {
    quote: "I believe whatever doesn’t kill you, simply makes you…stranger.",
    source: "The Joker",
    citation: "The Dark Knight",
    year: "2008"
  }, 
  {
    quote: "Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward.",
    source: "Rocky",
    citation: "Rocky Balboa",
    year: "2006"
  }, 
  {
    quote: "But you know happiness can be found even in the darkest of times, when one only remembers to turn on the light.",
    source: "Professor Dumbledore",
    citation: "Prisoner of Azkaban",
    year: "2004"
  }, 
  {
    quote: "Just because someone stumbles and loses their path, doesn’t mean they’re lost forever.",
    source: "Charles Xavier",
    citation: "X-Men: Days of Future Past",
    year: "2014"
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * 6);

  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote() {
  const quoteBox = document.getElementById('quote-box');
  quoteToPrint = getRandomQuote();
  let quoteString = `<p class="quote">${quoteToPrint.quote}</p><p class="source">${quoteToPrint.source}`;

  if (quoteToPrint.citation !== undefined) {
    quoteString += `<span class="citation">${quoteToPrint.citation}</span>`;
  }

  if (quoteToPrint.year !== undefined) {
    quoteString += `<span class="year">${quoteToPrint.year}</span></p>`;
  } else {
    quoteString += `</p>`;
  }
  
  console.log(quoteString);
}

printQuote()


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);