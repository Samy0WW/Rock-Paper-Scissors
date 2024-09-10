let computerScore=0;
let humanScore=0;

// create a function for computer choice
function getComputerChoice() {
    let randomNumber =Math.floor(Math.random()*9)+1;

    if (randomNumber<=3) {
    console.log("Computer : rock");
    return "rock"
    
    
    }
    else if(randomNumber<=6) 
    {
    console.log("Computer : paper");
    return "paper"
    }
    else if(randomNumber<=9)
    {
    console.log("Computer : scissors");
    return "scissors"
    }
        }


// create a function for human choice
function getHumanChoice(){

let humanChoice= prompt("choose between : Rock, Paper, Scissors")

if (humanChoice.toLowerCase()=="rock") {
    console.log("human : rock");
return "rock"
}
else if(humanChoice.toLowerCase()=="paper") 
{
    console.log("human : paper");
return "paper"
}
else if(humanChoice.toLowerCase()=="scissors")
{
    console.log("human : scissors");
return "scissors"
}
}



function playRound(humanChoice, computerChoice) {
        

      
    if (humanChoice==computerChoice) {
    console.log("Draw");
    }

    else if (humanChoice=="rock" && computerChoice=="paper" ||
             humanChoice=="scissors" && computerChoice=="rock" ||
             humanChoice=="paper" && computerChoice=="scissors")
    {
    console.log("Computer Wins");
    computerScore++;
    }

    else if (humanChoice=="paper" && computerChoice=="rock" || 
            humanChoice=="rock" && computerChoice=="scissors" || 
            humanChoice=="scissors" && computerChoice=="paper")
    {
    console.log("human Wins");
    humanScore++;
    }
    else
    {
        console.log("invalid input");
        
    }
    let body=document.querySelector("body");
    let result=document.createElement("div");
    body.appendChild(result);

    if (humanScore==5) {
    result.textContent= `Human Score : ${humanScore} \n Computer Score: ${computerScore} \n HUMAN WINS !`
    }
    else if(computerScore==5) 
    {
    result.textContent= `Human Score : ${humanScore} \n Computer Score: ${computerScore} \n COMPUTER WINS !`
    }
    else
    {
        result.textContent=`Human Score : ${humanScore} \n Computer Score: ${computerScore}`;
    }
    
}


let rock= document.querySelector("#Rock");
let paper= document.querySelector("#Paper");
let scissors= document.querySelector("#Scissors");

rock.addEventListener("click",() => { playRound("rock",getComputerChoice()) });
paper.addEventListener("click",() => {playRound("paper",getComputerChoice())});
scissors.addEventListener("click",() => {playRound("scissors",getComputerChoice())});



