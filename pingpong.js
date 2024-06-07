const button1=document.querySelector(".button1")
const button2=document.querySelector(".button2")
const p1Score=document.querySelector("#p1Score")
const p2Score=document.querySelector("#p2Score")
const winningScore=document.querySelector(".selection")
const resetbutton=document.querySelector(".reset")
let winScore=0
let player1Score=0;
let player2Score=0;
let isGameOver=false;

winningScore.addEventListener("change",function(e){
    winScore=parseInt(winningScore.value)
    reset()

})
button1.addEventListener("click",function(e){
    if(!isGameOver)
        {
    player1Score+=1;
    if(player1Score==winScore){
        isGameOver=true;
        p1Score.classList.add('winner')
        p2Score.classList.add('loser')
    }
    p1Score.innerText=player1Score;
    }

})
button2.addEventListener("click",function(e){
    if(!isGameOver)
        {
    player2Score+=1;
    if(player2Score==winScore){
        isGameOver=true;
        p1Score.classList.add('loser')
        p2Score.classList.add('winner')
    }
    p2Score.innerText=player2Score;
    }

})
resetbutton.addEventListener("click",reset)
function reset(){
    isGameOver=false
    player1Score=0
    player2Score=0
    p1Score.innerText=0
    p2Score.innerText=0
    p1Score.classList.remove("winner","loser")
    p2Score.classList.remove("winner","loser")

}