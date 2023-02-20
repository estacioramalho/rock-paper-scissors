let humanvictories = 0
let aivictories = 0

const rockButton = document.querySelector("#rockbutton")
const paperButton = document.querySelector("#paperbutton")
const scissorsButton = document.querySelector("#scissorsbutton")

const humanemoji = document.querySelector("#humanemoji")



function rockClick(){
    humanemoji.textContent = "🤜";
    aiPlays();
}

function paperClick(){
    humanemoji.textContent = "🖐️";
    aiPlays();
}

function scissorsClick(){
    humanemoji.textContent = "✌️";
    aiPlays();
}

function aiPlays(){
    const options = ["🤜", "🖐️", "✌️"]
    const randomIndex = Math.floor(Math.random() * options.length);
    const aiemoji = document.getElementById("aiemoji");
    aiemoji.textContent = options[randomIndex];
    if (humanemoji.textContent === "🤜" && aiemoji.textContent === "✌️") {
        humanvictories++;
      } else if (humanemoji.textContent === "🖐️" && aiemoji.textContent === "🤜") {
        humanvictories++;
      } else if (humanemoji.textContent === "✌️" && aiemoji.textContent === "🖐️") {
        humanvictories++;
      } else if (humanemoji.textContent === aiemoji.textContent) {
        // do nothing, it's a tie
      } else {
        aivictories++;
      }
    humanscore.textContent = ("Victories: " + humanvictories);
    aiscore.textContent = ("Victories: " + aivictories);
}


rockButton.addEventListener("click", rockClick)
paperButton.addEventListener("click", paperClick)
scissorsButton.addEventListener("click", scissorsClick)