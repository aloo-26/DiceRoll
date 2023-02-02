var heading=document.querySelector("h1");
var player1=document.querySelector("#player1");
var player2=document.querySelector("#player2");
var diceList=["images/one.jpg","images/two.jpg","images/three.jpg","images/four.jpg","images/five.png","images/six.jpg"];
var click=document.querySelector("button");
click.setAttribute("onclick","rollDice()");
function rollDice(){
    var randomNum1=Math.round(Math.random()*5);
    var randomNum2=Math.round(Math.random()*5);
    player1.setAttribute("src",diceList[randomNum1]);
    console.log(randomNum1,diceList[randomNum1]);
    player2.setAttribute("src",diceList[randomNum2]);
    console.log(randomNum2,diceList[randomNum2]);
    if (randomNum1>randomNum2){
        heading.textContent="PLAYER 1 Won, Congratulations";
    }
    else if(randomNum1<randomNum2){
        heading.textContent="PLAYER 2 Won, Congratulations";
    }
    else{
        heading.textContent="Draw, Play again";
    }
}
