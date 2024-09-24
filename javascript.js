const choices = ["rock","paper", "scissor"]
function getComputerChoice(){   

      return choices[Math.floor(Math.random()*3)] ;

}


let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
   humanChoice=humanChoice.toLocaleLowerCase()
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

console.log(humanScore ,computerScore)

if(humanScore>computerScore){
   console.log("you win")
}
else if(humanScore==computerScore){
   console.log("it's tie")
}
else{
   console.log("you lose")
}
const butt = document.querySelectorAll("#bnt")
butt.addEventListener(('click'), () =>{
   if (bnt.class) {
      playRound(bnt.class)
         
      }
   })
