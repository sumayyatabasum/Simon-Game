let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","green","purple"];

let started =false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelUp(){
  userSeq=[]; 
  level++;
  h2.innerText=`level ${level}`;
  let ranIdx = Math.floor(Math.random()*btns.length);
  let ranColor = btns[ranIdx];
  let ranBtn = document.querySelector(`.${ranColor}`);
  gameSeq.push(ranColor);
  console.log(gameSeq);

  gameFlash(ranBtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br>press any key to play again..`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        resSet();
    }
}
function btnPress(){
    let btn = (this);
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function resSet(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;   
}