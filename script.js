let humanvictories = 0
let aivictories = 0

const rockButton = document.querySelector("#rockbutton")
const paperButton = document.querySelector("#paperbutton")
const scissorsButton = document.querySelector("#scissorsbutton")

const humanemoji = document.querySelector("#humanemoji")
const aiemoji = document.querySelector("#aiemoji")



function rockClick(){
    console.log("Rock Clicked");
    humanemoji.innerHTML = "🤜";
    aiPlays();
}

function paperClick(){
    console.log("Paper Clicked");
    humanemoji.innerHTML = "🖐️";
    aiPlays();
}

function scissorsClick(){
    console.log("Scissors Clicked");
    humanemoji.innerHTML = "✌️";
    aiPlays();
}

function aiPlays(){
    console.log("Ai Plays");
}


rockButton.addEventListener("click", rockClick)
paperButton.addEventListener("click", paperClick)
scissorsButton.addEventListener("click", scissorsClick)