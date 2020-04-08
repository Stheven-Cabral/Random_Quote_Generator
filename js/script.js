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
    citatation: "The Lion King",
    year: "1994"
  }, 
  {
    quote: "Do, or do not. There is no \“\'try\'.",
    source: "Yoda",
    citatation: "The Empire Strikes Back",
    year: "1980"
  }, 
  {
    quote: "I believe whatever doesn’t kill you, simply makes you…stranger.",
    source: "The Joker",
    citatation: "The Dark Knight",
    year: "2008"
  }, 
  {
    quote: "Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward.",
    source: "Rocky",
    citatation: "Rocky Balboa",
    year: "2006"
  }, 
  {
    quote: "But you know happiness can be found even in the darkest of times, when one only remembers to turn on the light.",
    source: "Professor Dumbledore",
    citatation: "Prisoner of Azkaban",
    year: "2004"
  }, 
  {
    quote: "Just because someone stumbles and loses their path, doesn’t mean they’re lost forever.",
    source: "Charles Xavier",
    citatation: "X-Men: Days of Future Past",
    year: "2014"
  }
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);