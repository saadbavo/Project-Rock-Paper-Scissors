const choices = ["rock","paper", "scissor"]
function getComputerChoice(){   

      return choices[Math.floor(Math.random()*3)] ;

}

const resultDisplay = document.getElementById('result')
let result

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
   if(humanChoice ==='rock'){
      switch (computerChoice){
         case 'scissor':
            result = '"nice choice , you win!"'
             humanScore++
            break
         case 'paper':
            result='"you lose!try next time"'
            computerScore++
            break
         default:
            result = '"its a tie"'            

      }
      
   }
   if(humanChoice ==='paper'){
      switch (computerChoice){
         case 'rock':
            result = '"nice choice , you win!"'
            humanScore++
            break
         case 'scissor':
            result='"you lose!try next time"'
            computerScore++
            break
         default:
            result = '"its a tie"'            

      }
      
   }
   if(humanChoice ==='scissor'){
      switch (computerChoice){
         case 'paper':
            result = '"nice choice , you win!"'
            humanScore++
            break
         case 'rock':
            result='"you lose!try next time"'
            computerScore++
            break
         default:
            result = '"its a tie"'            

      }
      
   }

   resultDisplay.innerHTML = result

   const score= document.querySelector("#score");
const playerAndComputerScore= document.createElement("div");
playerAndComputerScore.classList.add("scores");
playerAndComputerScore.textContent = humanScore+' '+computerScore;
score.appendChild(playerAndComputerScore)


}


const computerSelection = getComputerChoice()




const butt = document.querySelectorAll("#bnt")
butt.forEach((bnt)=>{
bnt.addEventListener('click', () =>{
 playRound(bnt.value, computerSelection)
})
})



