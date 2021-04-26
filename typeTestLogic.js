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
let limit = 0;

// current word to be typed
let current = data[randomValue()];
// current word split into an array of characters


// Displays the current word to be typed on the web page
const textBox = document.getElementById("textBox");
const textBoxTwo = document.getElementById("textBoxTwo");
let textElement = document.createElement('span');
textElement.id = "current-word";
let word = document.createTextNode(current);
textElement.appendChild(word);
textBox.appendChild(textElement);
textElement.style.fontWeight = "bold";

let test = []
test.push(textElement);
//console.log(test);



// // 

// Displays a line of text

// currentWords is the line currently being typed on 
let currentWords = getNewTextLine(data);
// nextWords is the incoming text to relplace currentWords
let nextWords = getNewTextLine(data);

document.getElementById("current-word").remove();
console.log(nextWords);
// Assigning currentWords
for(let i =0;i < currentWords.length; i++ ){
    if(i === 0){
        currentWords[i].id = "current-word";
    }
    textBox.appendChild(currentWords[i]);

}

// Assigning nextWords
for(let i =0;i < nextWords.length; i++ ){
   
    textBoxTwo.appendChild(nextWords[i]);
}

// Turning NodeList into an array
let target = Array.from(textBox.querySelectorAll('span'));
console.log(target)

// currentTarget is the current word being typed out
let currentTarget = target.shift()
console.log(currentTarget);

const input = document.querySelector("input").addEventListener("keyup", function(e){
    
    let input = document.querySelector('input');
    let temp = nextWords
    
    if((e.target.value.charCodeAt((e.target.value.length)-1) === 32)&&(e.target.value.length != 1)){

        let holder = temp;
        if(currentTarget.style.backgroundColor === "grey"){
            currentTarget.style.color = "green";
            currentTarget.style.backgroundColor = "transparent";
        }else{
            currentTarget.style.color = "red";
            currentTarget.style.backgroundColor = "transparent";
        }
        input.value = "";

        currentTarget =target.shift();
        
        if(currentTarget === undefined){
            console.log(holder)
            console.log(currentWords);
            removeChildren(textBox);
            addChildren(textBox,holder);
            target = Array.from(textBox.querySelectorAll('span'));
            currentTarget = target.shift(); 
            removeChildren(textBoxTwo)
            console.log(currentTarget)
            let basic = getNewTextLine(data);
            addChildren(textBoxTwo,basic)
            
            nextWords = basic;
            
            
           // console.log(currentWords);
            // for(let i = 0; i < currentWords.length; i++){
            //     textBox.appendChild(currentWords[i]);
            // }
              
            
            // removeChildren(textBoxTwo);
            //  for(let a = 0; a < nextWords; a++){
            //     textBoxTwo.appendChild(nextWords[a]);
            //  }
        }
        
        

    }else{
        
      
        return wordCheck(e.target.value, currentTarget);
    }
})



// randomValue function returns a random number 0-99
//this is used to randomly get indexes for the words in data
function randomValue(){
    return Math.floor(Math.random()*100);
}

// function to check the spelling
function wordCheck(e,node){

    console.log(node.innerHTML);
    if(node.innerHTML.includes(e)){
        if(e === ''){
            node.style.backgroundColor = "transparent";
            node.style.color = "white";
        }else{
            
            node.style.backgroundColor = "grey";
            node.style.color = "black";
            
        }
    } 
    
    else{
        
        node.style.backgroundColor = "red";
        node.style.color = "black";
    }
}

function getNewTextLine(wordData){
    let box = document.getElementById("textBox");
    const width = box.offsetWidth - 200;
    let sumWidth = 0;
    const wordLine = [];
    do{
        let newWord = wordData[randomValue()] ;
        let newSpan = document.createElement("span");
        //newSpan.id = "test";
        newSpan.style.color = "white";
        newSpan.style.fontWeight = "bold";
        newSpan.style.fontSize = "1.25em";
        let newTextNode = document.createTextNode(newWord);
        newSpan.appendChild(newTextNode);
        box.appendChild(newSpan);
        sumWidth += newSpan.offsetWidth;
        
        wordLine.push(newSpan);
       // document.getElementById("test").remove();
            


    
    }while(sumWidth < width);

    return wordLine;
}

function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }

}

function addChildren(parent,nodes){
    
    for(let i = 0; i < nodes.length; i++){
        
        parent.appendChild(nodes[i]);
    }

}