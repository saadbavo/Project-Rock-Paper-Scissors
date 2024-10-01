const choices = ["rock","paper", "scissor"]
function getComputerChoice(){   

      return choices[Math.floor(Math.random()*3)] ;

}

let humanScore = 1;
let computerScore = 1;
function playRound(humanChoice, computerChoice){
   if(humanChoice ==='rock'){
      switch (computerChoice){
         case 'scissor':
            console.log("nice choice , you win!")
             humanScore++
            break
         case 'paper':
            console.log("you lose!try next time")
            computerScore++
            break
         default:
            console.log("it's a tie")            

      }
      
   }
   if(humanChoice ==='paper'){
      switch (computerChoice){
         case 'rock':
            console.log("nice choice , you win!")
            humanScore++
            break
         case 'scissor':
            console.log("you lose!try next time")
            computerScore++
            break
         default:
            console.log("it's a tie")            

      }
      
   }
   if(humanChoice ==='scissor'){
      switch (computerChoice){
         case 'paper':
            console.log("nice choice , you win!")
            humanScore++
            break
         case 'rock':
            console.log("you lose!try next time")
            computerScore++
            break
         default:
            console.log("it's a tie")            

      }
      
   }
}


const computerSelection = getComputerChoice()




const butt = document.querySelectorAll("#bnt")
butt.forEach((bnt)=>{
bnt.addEventListener('click', () =>{
   if (bnt.value) {
      playRound(butt.value, computerSelection)
         
      }
   })
})
const score= document.querySelector("#score");
const playerAndComputerScore= document.createElement("div");
playerAndComputerScore.classList.add("scores");
playerAndComputerScore.textContent = humanScore+' '+computerScore;


