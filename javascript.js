const choices = ["rock","paper", "scissor"]
function getComputerChoice(){   

      return choices[Math.floor(Math.random()*3)] ;

}
function getHumanChoice(){
 let choice
 choice=window.prompt("rock, paper , scissor?:").toLocaleLowerCase();
 if(choices.includes(choice)){
   return choice;
 }
 else{
   alert("invald input please try again");
 }
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
   humanChoice=humanChoice.toLocaleLowerCase()
   if(humanChoice ==='rock'){
      switch (computerChoice){
         case 'scissor':
            console.log("nice choice , you win!")
            break
         case 'paper':
            console.log("you lose!try next time")
            break
         default:
            console.log("it's a tie")            

      }
      
   }
   if(humanChoice ==='rock'){
      switch (computerChoice){
         case 'scissor':
            console.log("nice choice , you win!")
            break
         case 'paper':
            console.log("you lose!try next time")
            break
         default:
            console.log("it's a tie")            

      }
      
   }
   if(humanChoice ==='rock'){
      switch (computerChoice){
         case 'scissor':
            console.log("nice choice , you win!")
            break
         case 'paper':
            console.log("you lose!try next time")
            break
         default:
            console.log("it's a tie")            

      }
      
   }
}