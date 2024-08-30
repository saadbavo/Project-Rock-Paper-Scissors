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
