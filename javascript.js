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
score.appendChild(playerAndComputerScore);

if (humanScore== 5){
   const finalScore = document.querySelector("#fscore");
   const declare= document.createElement("h1");
   declare.classList.add("dc");
   declare.textContent = "Congelation! yOUR tHE wINNER"
   finalScore.appendChild(declare)
   const restBto  = document.createElement("button")
   restBto.setAttribute("id", "rst")
   restBto.textContent= "RESTART"
   restBto.addEventListener('click',()=>{
      location.reload()
   })
   finalScore.appendChild(restBto)
}

else if(computerScore==5){
   cons
}

}



const computerSelection = getComputerChoice()




const butt = document.querySelectorAll("#bnt")
butt.forEach((bnt)=>{
bnt.addEventListener('click', () =>{
 playRound(bnt.value, computerSelection)
})
})



