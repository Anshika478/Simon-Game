let gameSeq = [] ;
let userSeq = [] ;

let btns = ["yellow" , "red" , "blue" , "green"] ;

let h2 = document.querySelector ("h2") ;
let h3 = document.querySelector ("h3") ;

let started = false ;
let level = 0 ;
let highscore = 0 ;

document.addEventListener("keypress" , function(event){
    if (started == false) {
        console.log("game started") ;
        started = true ;

        levelUp() ;
    }
    
})

function btnFlash (btn) {
    btn.classList.add ("flash") ;
    setTimeout(() => {
      btn.classList.remove ("flash") ;
    },250) ;
}


function levelUp () {
   userSeq = [];
   level++ ; 
   h2.innerText = `level ${level}` ;

   let randomIdx = Math.floor(Math.random()*3) ;
   let randomColor = btns[randomIdx]
   let randombtn = document.querySelector(`.${randomColor}`) ;

   gameSeq.push(randomColor) ;
   console.log(gameSeq);
   btnFlash(randombtn) ;
} ;


function checkAns (idx) {
    
    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    } else {
        h2.innerHTML = `Game over ! Your score was <b>${level}</b> </br> Press any Key to Start` ;
        let score = level ;
        if (highscore < score) {
            highscore = score ;
            h3.innerText = `Highscore : ${highscore}`
        } ;
        let body = document.querySelector("body") ;
        body.style.backgroundColor = "red" ;
        setTimeout(() => {
            body.style.backgroundColor = "white" ;
        },200)
        reset() ;
    }
}

function btnPress (){
    let btn = this ;
    btnFlash(btn) ;

    let userColor = btn.getAttribute("id") ;
    userSeq.push (userColor) ;

    checkAns (userSeq.length-1) ;
}

let allBtns = document.querySelectorAll(".btn") ;
for (btn of allBtns){
    btn.addEventListener("click" , btnPress) ;
}


function reset () {
    started = false ;
    gameSeq = [] ;
    userSeq = [] ;
    level = 0 ;
}



