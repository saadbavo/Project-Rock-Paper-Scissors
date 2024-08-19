
function getComputerChoice(){   

      let randomNumber= Math.floor(Math.random()*3);
      const choice1= "rock";
      const choice2= "scissor";
      const choice3= "paper";
      if  (randomNumber==0){
        return console.log(choice1);
      }
     else if (randomNumber==1){
        return console.log(choice2);
     }
     else{
        return console.log(choice3);
     }
}
function  getHumanChoice(){
let humanChoice=prompt("please chose one option: rock , paper , scissor")
return console.log(humanChoice)
}
humanScore=0;
computerScore=0;