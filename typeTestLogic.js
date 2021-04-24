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
let textElement = document.createElement('span');
textElement.id = "current-word";
let word = document.createTextNode(current);
textElement.appendChild(word);
textBox.appendChild(textElement);
textElement.style.fontWeight = "bold";

// 

const input = document.querySelector("input").addEventListener("keyup", function(e){
    
    let input = document.querySelector('input');
    console.log((e.target.value.charCodeAt((e.target.value.length)-1)));
    console.log(e.target.value.length);
    if((e.target.value.charCodeAt((e.target.value.length)-1) === 32)&&(e.target.value.length != 1)){

        
        input.value = "";

        let next = data[randomValue()];
        document.getElementById("current-word").remove();
        let newTextElement = document.createElement('span');
        newTextElement.id = "current-word";
        let newWord = document.createTextNode(next);
        newTextElement.appendChild(newWord);
        textBox.appendChild(newTextElement);
        newTextElement.style.fontWeight = "bold";
        current = next;
    }else{
        
        return wordCheck(e.target.value, current);
    }
})



// randomValue function returns a random number 0-99
//this is used to randomly get indexes for the words in data
function randomValue(){
    return Math.floor(Math.random()*100);
}

// function to check the spelling
function wordCheck(e,word){
    let node = document.getElementById("current-word");
    console.log(word);
    console.log(word.includes(e));
    if(word.includes(e)){
        if(e === ''){
            node.style.backgroundColor = "transparent";
            node.style.color = "white";
        }else{
            
            node.style.backgroundColor = "green";
            node.style.color = "black";
        }
    } 
    
    else{
        
        node.style.backgroundColor = "red";
        node.style.color = "black";
    }
}