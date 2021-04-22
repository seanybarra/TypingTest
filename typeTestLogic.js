const data = ["a",
"about",
"all",
"also",
"and",
"as",
"at",
"be",
"because",
"but",
"by",
"can",
"come",
"could",
"day",
"do",
"even",
"find",
"first",
"for",
"from",
"get",
"give",
"go",
"have",
"he",
"her",
"here",
"him",
"his",
"how",
"I",
"if",
"in",
"into",
"it",
"its",
"just",
"know",
"like",
"look",
"make",
"man",
"many",
"me",
"more",
"my",
"new",
"no",
"not",
"now",
"of",
"on",
"one",
"only",
"or",
"other",
"our",
"out",
"people",
"say",
"see",
"she",
"so",
"some",
"take",
"tell",
"than",
"that",
"the",
"their",
"them",
"then",
"there",
"these",
"they",
"thing",
"think",
"this",
"those",
"time",
"to",
"two",
"up",
"use",
"very",
"want",
"way",
"we",
"well",
"what",
"when",
"which",
"who",
"will",
"with",
"would",
"year",
"you",
"your"];

// limit allows only 100 words to be in the typing test
let limit = 100;

// current word to be typed
let current = data[randomValue()];
// current word split into an array of characters
let splitCur = current.split('');

// Displays the current word to be typed on the web page
const textBox = document.getElementById("textBox");
let textElement = document.createElement('p');
textElement.id = "current-word";
let word = document.createTextNode(current);
textElement.appendChild(word);
textBox.appendChild(textElement);
textElement.style.fontWeight = "bold";

// 

const input = document.querySelector("input").addEventListener("keyup", function(e){
    return wordCheck(e.target.value, current,);
})



// randomValue function returns a random number 0-99
//this is used to randomly get indexes for the words in data
function randomValue(){
    return Math.floor(Math.random()*100);
}

// function to check the spelling
function wordCheck(e,word){
    let node = document.getElementById("current-word");
    if(word.includes(e)){
        console.log("true");
        node.style.color = "green";
    } else{
        console.log("false");
        node.style.color = "red";
    }
}