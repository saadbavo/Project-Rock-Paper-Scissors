const choices = ["rock","paper", "scissor"]
function getComputerChoice(){   

      return choices[Math.floor(Math.random()*3)] ;
      }

      const allButton = document.querySelectorAll("#btn");
   b.addEventListener('click', ()=> {
    const palayerSelector= allButton.values;


   })
      computerSelector= getComputerChoice()
      allButton.addEventListener("click", playRound(palayerSelector, computerSelector));
      


let  humanScore= 0;
let computerScore=0;


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
      