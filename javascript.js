const choices = ["rock","paper", "scissor"]
function getComputerChoice(){   

      return choices[Math.floor(Math.random()*3)] ;
}
function getHumanChoice(){
 let choice
 choice=prompt("rock, paper , scissor?:")
}